import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';

interface EarthGlobe3DProps {
  /**
   * Optional color to tint the Earth's texture.
   * Default is 0xffffff (white), which shows the texture's true colors.
   * Example: 0x00ff00 for a green tint, 0x0000ff for a blue tint.
   */
  earthColor?: THREE.ColorRepresentation;
}

const EarthGlobe3D: React.FC<EarthGlobe3DProps> = ({ earthColor = 0xffffff }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const earthRef = useRef<THREE.Mesh | null>(null);
  const cloudRef = useRef<THREE.Mesh | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  const mouseDownRef = useRef(false);
  const lastMouseXRef = useRef(0);
  const lastMouseYRef = useRef(0);

  // --- Animation Loop ---
  const animate = useCallback(() => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current || !earthRef.current || !cloudRef.current) {
      return;
    }

    earthRef.current.rotation.y += 0.001;
    cloudRef.current.rotation.y += 0.001;
    rendererRef.current.render(sceneRef.current, cameraRef.current);
    animationFrameIdRef.current = requestAnimationFrame(animate);
  }, []);

  // --- Event Handlers ---
  const rotateScene = useCallback((deltaX: number, deltaY: number) => {
    if (earthRef.current && cloudRef.current) {
      earthRef.current.rotation.y += deltaX / 300;
      earthRef.current.rotation.x += deltaY / 300;
      cloudRef.current.rotation.y += deltaX / 300;
      cloudRef.current.rotation.x += deltaY / 300;
    }
  }, []);

  const onMouseMove = useCallback((evt: MouseEvent) => {
    if (!mouseDownRef.current) return;
    evt.preventDefault();
    const deltaX = evt.clientX - lastMouseXRef.current;
    const deltaY = evt.clientY - lastMouseYRef.current;
    lastMouseXRef.current = evt.clientX;
    lastMouseYRef.current = evt.clientY;
    rotateScene(deltaX, deltaY);
  }, [rotateScene]);

  const onMouseDown = useCallback((evt: MouseEvent) => {
    evt.preventDefault();
    mouseDownRef.current = true;
    lastMouseXRef.current = evt.clientX;
    lastMouseYRef.current = evt.clientY;
  }, []);

  const onMouseUp = useCallback((evt: MouseEvent) => {
    evt.preventDefault();
    mouseDownRef.current = false;
  }, []);

  const onWindowResize = useCallback(() => {
    if (cameraRef.current && rendererRef.current) {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    }
  }, []);

  // --- Initialization and Cleanup Effect ---
  useEffect(() => {
    if (!mountRef.current) return;

    // --- Initialization ---
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    // Adjusted camera position to accommodate the larger Earth
    cameraRef.current.position.z = 160; 

    // Earth terrain
    const earth_texture = new THREE.TextureLoader().load(
      "https://i.postimg.cc/ry0pcyyZ/earth.jpg"
    );
    const earth_bump = new THREE.TextureLoader().load(
      "https://i.postimg.cc/mgrJfkBt/bump.jpg"
    );
    const earth_specular = new THREE.TextureLoader().load(
      "https://i.postimg.cc/R06YhY3m/spec.jpg"
    );
    // INCREASED EARTH SIZE: Radius from 30 to 50, and segments for smoother look
    const earth_geometry = new THREE.SphereGeometry(50, 64, 64); 
    const earth_material = new THREE.MeshPhongMaterial({
      shininess: 40,
      bumpScale: 1,
      map: earth_texture,
      bumpMap: earth_bump,
      specularMap: earth_specular,
      color: new THREE.Color(earthColor)
    });
    earthRef.current = new THREE.Mesh(earth_geometry, earth_material);
    sceneRef.current.add(earthRef.current);

    // Earth cloud
    const cloud_texture = new THREE.TextureLoader().load(
      "https://i.postimg.cc/k4WhFtFh/cloud.png"
    );
    // INCREASED CLOUD SIZE: Radius from 31 to 51 (maintaining 1 unit difference)
    const cloud_geometry = new THREE.SphereGeometry(51, 64, 64); 
    const cloud_material = new THREE.MeshBasicMaterial({
      map: cloud_texture,
      transparent: true,
      opacity: 0.8,
      depthWrite: false
    });
    cloudRef.current = new THREE.Mesh(cloud_geometry, cloud_material);
    sceneRef.current.add(cloudRef.current);

    // Point light (upper left) - provides directional lighting and highlights
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(-400, 100, 150);
    sceneRef.current.add(pointLight);

    // Ambient light - INCREASED INTENSITY to brighten shadowed areas and show "full color"
    const ambientLight = new THREE.AmbientLight(0xaaaaaa); // Increased from 0x222222 to 0xaaaaaa
    sceneRef.current.add(ambientLight);

    // Renderer
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current.setClearColor(0x000000, 0); // Transparent background
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(rendererRef.current.domElement);

    // Event handlers
    window.addEventListener("resize", onWindowResize, false);
    const canvas = rendererRef.current.domElement;
    canvas.addEventListener("mousemove", onMouseMove, false);
    canvas.addEventListener("mousedown", onMouseDown, false);
    window.addEventListener("mouseup", onMouseUp, false);

    // Start animation loop
    animationFrameIdRef.current = requestAnimationFrame(animate);

    // --- Cleanup function ---
    return () => {
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
      window.removeEventListener("resize", onWindowResize, false);
      canvas.removeEventListener("mousemove", onMouseMove, false);
      canvas.removeEventListener("mousedown", onMouseDown, false);
      window.removeEventListener("mouseup", onMouseUp, false);

      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
        earth_texture.dispose();
        earth_bump.dispose();
        earth_specular.dispose();
        cloud_texture.dispose();
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (mountRef.current && rendererRef.current.domElement) {
          mountRef.current.removeChild(rendererRef.current.domElement);
        }
      }
      sceneRef.current = null; cameraRef.current = null; rendererRef.current = null;
      earthRef.current = null; cloudRef.current = null;
    };
  }, [animate, onMouseDown, onMouseMove, onMouseUp, onWindowResize, earthColor]);

  return (
    <div ref={mountRef} className="absolute inset-0 w-screen h-screen overflow-hidden" />
  );
};

export default EarthGlobe3D;
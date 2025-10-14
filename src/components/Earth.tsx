import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Earth: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      <Canvas camera={{ position: [0, 0, 160], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[-400, 100, 150]} intensity={1} />
        <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade speed={1} />
        <EarthMesh />
        <CloudMesh />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
      </Canvas>
    </div>
  );
};

const EarthMesh: React.FC = () => {
  const earthRef = useRef<THREE.Mesh | null>(null);
  const [earthTexture, setEarthTexture] = useState<THREE.Texture | null>(null);
  const [earthBump, setEarthBump] = useState<THREE.Texture | null>(null);
  const [earthSpecular, setEarthSpecular] = useState<THREE.Texture | null>(null);

  React.useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load('https://i.postimg.cc/ry0pcyyZ/earth.jpg', (texture) => setEarthTexture(texture));
    loader.load('https://i.postimg.cc/mgrJfkBt/bump.jpg', (texture) => setEarthBump(texture));
    loader.load('https://i.postimg.cc/R06YhY3m/spec.jpg', (texture) => setEarthSpecular(texture));
  }, []);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  if (!earthTexture || !earthBump || !earthSpecular) return null;

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[30, 32, 32]} />
      <meshPhongMaterial
        map={earthTexture}
        bumpMap={earthBump}
        specularMap={earthSpecular}
        bumpScale={1}
        shininess={40}
      />
    </mesh>
  );
};

const CloudMesh: React.FC = () => {
  const cloudRef = useRef<THREE.Mesh>(null);
  const [cloudTexture, setCloudTexture] = useState<THREE.Texture | null>(null);

  React.useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load('https://i.postimg.cc/k4WhFtFh/cloud.png', (texture) => setCloudTexture(texture));
  }, []);

  useFrame(() => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y += 0.001;
    }
  });

  if (!cloudTexture) return null;

  return (
    <mesh ref={cloudRef}>
      <sphereGeometry args={[31, 32, 32]} />
      <meshBasicMaterial map={cloudTexture} transparent opacity={0.8} />
    </mesh>
  );
};

export default Earth;

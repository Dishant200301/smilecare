// Custom hook for consistent navigation behavior
import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

interface NavItem {
  name: string;
  path: string;
}

export const useConsistentNavigation = (navItems: NavItem[]) => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Calculate active item based on current path
  const activeItem = useMemo(() => {
    const current = navItems.find(item => item.path === location.pathname);
    return current ? current.name : 'Home';
  }, [location.pathname, navItems]);

  // Track mounted state for hydration safety
  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset mobile menu on route change (consistent behavior)
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Consistent active state checker
  const isActive = (name: string) => {
    return mounted ? activeItem === name : false;
  };

  return {
    mounted,
    isOpen,
    setIsOpen,
    activeItem,
    isActive
  };
};

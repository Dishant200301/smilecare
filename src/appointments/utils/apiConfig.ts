// API Configuration for public booking website
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export const getApiUrl = (): string => API_URL;
export const getBackendUrl = (): string => BACKEND_URL;

// Public API doesn't need auth headers - these are open endpoints
export const getPublicHeaders = () => ({
    'Content-Type': 'application/json'
});

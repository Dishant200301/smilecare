// Validation utility functions for appointments

import type { CustomerFormData, CustomerValidation } from '../types/customer';

/**
 * Validate phone number (Indian format)
 */
export const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Validate email
 */
export const validateEmail = (email: string): boolean => {
    if (!email) return true; // Email is optional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate Aadhar number (12 digits)
 */
export const validateAadhar = (aadhar: string): boolean => {
    if (!aadhar) return true; // Aadhar is optional
    const aadharRegex = /^\d{12}$/;
    return aadharRegex.test(aadhar.replace(/\s/g, ''));
};

/**
 * Validate name
 */
export const validateName = (name: string): boolean => {
    return name.trim().length >= 2;
};

/**
 * Validate entire customer form
 */
export const validateCustomerForm = (data: CustomerFormData): CustomerValidation => {
    const errors: CustomerValidation['errors'] = {};

    if (!validateName(data.name)) {
        errors.name = 'Please enter a valid name (at least 2 characters)';
    }

    if (!validatePhone(data.phone)) {
        errors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!validateEmail(data.email || '')) {
        errors.email = 'Please enter a valid email address';
    }

    if (!validateAadhar(data.aadharCard || '')) {
        errors.aadharCard = 'Please enter a valid 12-digit Aadhar number';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

/**
 * Format phone number for display
 */
export const formatPhoneDisplay = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
    }
    return phone;
};

/**
 * Format Aadhar number for display (XXXX XXXX XXXX)
 */
export const formatAadharDisplay = (aadhar: string): string => {
    const cleaned = aadhar.replace(/\D/g, '');
    if (cleaned.length === 12) {
        return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 8)} ${cleaned.slice(8)}`;
    }
    return aadhar;
};

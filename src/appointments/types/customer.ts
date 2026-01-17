// Customer Types - Public facing customer data
export interface CustomerFormData {
    name: string;
    phone: string;
    email?: string;
    aadharCard?: string;
}

export interface CustomerValidation {
    isValid: boolean;
    errors: {
        name?: string;
        phone?: string;
        email?: string;
        aadharCard?: string;
    };
}

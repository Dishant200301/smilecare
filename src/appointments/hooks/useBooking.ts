// useBooking Hook - Manage booking form state and submission
import { useState, useCallback } from 'react';
import { publicBookingService } from '../services/bookingService';
import type { BookingRequest, BookingResponse } from '../types/booking';
import type { CustomerFormData, CustomerValidation } from '../types/customer';
import { validateCustomerForm } from '../utils/validationUtils';
import type { PublicSlot } from '../types/slot';

interface UseBookingReturn {
    // Form state
    customerData: CustomerFormData;
    setCustomerData: React.Dispatch<React.SetStateAction<CustomerFormData>>;
    selectedSlot: PublicSlot | null;
    setSelectedSlot: (slot: PublicSlot | null) => void;
    notes: string;
    setNotes: (notes: string) => void;

    // Validation
    validation: CustomerValidation;
    validateForm: () => boolean;

    // Submission
    loading: boolean;
    error: string | null;
    bookingResponse: BookingResponse | null;
    submitBooking: () => Promise<boolean>;

    // Status check
    checkStatus: (reference: string, phone: string) => Promise<BookingResponse | null>;
    cancelBooking: (reference: string, phone: string) => Promise<boolean>;

    // Reset
    resetForm: () => void;
}

const initialCustomerData: CustomerFormData = {
    name: '',
    phone: '',
    email: '',
    aadharCard: ''
};

const initialValidation: CustomerValidation = {
    isValid: true,
    errors: {}
};

export const useBooking = (): UseBookingReturn => {
    // Form state
    const [customerData, setCustomerData] = useState<CustomerFormData>(initialCustomerData);
    const [selectedSlot, setSelectedSlot] = useState<PublicSlot | null>(null);
    const [notes, setNotes] = useState<string>('');

    // Validation state
    const [validation, setValidation] = useState<CustomerValidation>(initialValidation);

    // Submission state
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [bookingResponse, setBookingResponse] = useState<BookingResponse | null>(null);

    // Validate form
    const validateForm = useCallback((): boolean => {
        const result = validateCustomerForm(customerData);
        setValidation(result);

        if (!selectedSlot) {
            setError('Please select a time slot');
            return false;
        }

        return result.isValid;
    }, [customerData, selectedSlot]);

    // Submit booking request
    const submitBooking = useCallback(async (): Promise<boolean> => {
        if (!validateForm()) {
            return false;
        }

        if (!selectedSlot) {
            setError('Please select a time slot');
            return false;
        }

        setLoading(true);
        setError(null);

        try {
            const bookingRequest: BookingRequest = {
                slotId: selectedSlot._id,
                customerName: customerData.name.trim(),
                customerPhone: customerData.phone.replace(/\s/g, ''),
                customerEmail: customerData.email?.trim() || undefined,
                customerAadhar: customerData.aadharCard?.replace(/\s/g, '') || undefined,
                notes: notes.trim() || undefined,
                date: selectedSlot.date,
                startTime: selectedSlot.startTime
            };

            const response = await publicBookingService.createBookingRequest(bookingRequest);

            if (response.success) {
                setBookingResponse(response.data);
                return true;
            }

            return false;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to submit booking');
            return false;
        } finally {
            setLoading(false);
        }
    }, [customerData, selectedSlot, notes, validateForm]);

    // Check booking status
    const checkStatus = useCallback(async (reference: string, phone: string): Promise<BookingResponse | null> => {
        setLoading(true);
        setError(null);

        try {
            const response = await publicBookingService.checkBookingStatus({
                bookingReference: reference,
                phone: phone.replace(/\s/g, '')
            });

            if (response.success) {
                return response.data;
            }
            return null;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to check status');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    // Cancel booking
    const cancelBooking = useCallback(async (reference: string, phone: string): Promise<boolean> => {
        setLoading(true);
        setError(null);

        try {
            const response = await publicBookingService.cancelBookingRequest(
                reference,
                phone.replace(/\s/g, '')
            );

            return response.success;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to cancel booking');
            return false;
        } finally {
            setLoading(false);
        }
    }, []);

    // Reset form
    const resetForm = useCallback(() => {
        setCustomerData(initialCustomerData);
        setSelectedSlot(null);
        setNotes('');
        setValidation(initialValidation);
        setError(null);
        setBookingResponse(null);
    }, []);

    return {
        customerData,
        setCustomerData,
        selectedSlot,
        setSelectedSlot,
        notes,
        setNotes,
        validation,
        validateForm,
        loading,
        error,
        bookingResponse,
        submitBooking,
        checkStatus,
        cancelBooking,
        resetForm
    };
};

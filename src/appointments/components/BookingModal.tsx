// BookingModal Component - Modal popup for booking form
import React from 'react';
import { X } from 'lucide-react';
import type { CustomerFormData, CustomerValidation } from '../types/customer';
import type { PublicSlot } from '../types/slot';
import { formatDateFull } from '../utils/dateUtils';
import { formatTime12Hour } from '../utils/timeUtils';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedSlot: PublicSlot | null;
    customerData: CustomerFormData;
    onChange: (data: CustomerFormData) => void;
    validation: CustomerValidation;
    notes: string;
    onNotesChange: (notes: string) => void;
    onSubmit: () => void;
    loading?: boolean;
    error?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({
    isOpen,
    onClose,
    selectedSlot,
    customerData,
    onChange,
    validation,
    notes,
    onNotesChange,
    onSubmit,
    loading = false,
    error
}) => {
    if (!isOpen || !selectedSlot) return null;

    const handleChange = (field: keyof CustomerFormData, value: string) => {
        onChange({
            ...customerData,
            [field]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <>
            {/* Overlay */}
            <div className="booking-modal-overlay" onClick={onClose}></div>

            {/* Modal */}
            <div className="booking-modal">
                {/* Close Button */}
                <button className="booking-modal__close" onClick={onClose} aria-label="Close">
                    <X className="w-6 h-6" />
                </button>

                {/* Selected Slot Info */}
                <div className="booking-modal__header">
                    <h2 className="booking-modal__title">Book Appointment</h2>
                    <div className="booking-modal__slot-info">
                        <p className="booking-modal__date">{formatDateFull(selectedSlot.date)}</p>
                        <p className="booking-modal__time">{formatTime12Hour(selectedSlot.startTime)}</p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="booking-modal__form">
                    {/* Row 1: Full Name & Phone Number */}
                    <div className="booking-modal__row">
                        <div className="booking-modal__field">
                            <label className="booking-modal__label" htmlFor="modal-name">
                                Full Name <span className="booking-modal__required">*</span>
                            </label>
                            <input
                                type="text"
                                id="modal-name"
                                className={`booking-modal__input ${validation.errors.name ? 'booking-modal__input--error' : ''}`}
                                placeholder="Enter your full name"
                                value={customerData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                disabled={loading}
                            />
                            {validation.errors.name && (
                                <span className="booking-modal__error">{validation.errors.name}</span>
                            )}
                        </div>

                        <div className="booking-modal__field">
                            <label className="booking-modal__label" htmlFor="modal-phone">
                                Phone Number <span className="booking-modal__required">*</span>
                            </label>
                            <input
                                type="tel"
                                id="modal-phone"
                                className={`booking-modal__input ${validation.errors.phone ? 'booking-modal__input--error' : ''}`}
                                placeholder="Enter 10-digit phone number"
                                value={customerData.phone}
                                onChange={(e) => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                                disabled={loading}
                            />
                            {validation.errors.phone && (
                                <span className="booking-modal__error">{validation.errors.phone}</span>
                            )}
                        </div>
                    </div>

                    {/* Row 2: Email & Aadhar */}
                    <div className="booking-modal__row">
                        <div className="booking-modal__field">
                            <label className="booking-modal__label" htmlFor="modal-email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="modal-email"
                                className={`booking-modal__input ${validation.errors.email ? 'booking-modal__input--error' : ''}`}
                                placeholder="Enter your email (optional)"
                                value={customerData.email || ''}
                                onChange={(e) => handleChange('email', e.target.value)}
                                disabled={loading}
                            />
                            {validation.errors.email && (
                                <span className="booking-modal__error">{validation.errors.email}</span>
                            )}
                        </div>

                        <div className="booking-modal__field">
                            <label className="booking-modal__label" htmlFor="modal-aadhar">
                                Aadhar Number
                            </label>
                            <input
                                type="text"
                                id="modal-aadhar"
                                className={`booking-modal__input ${validation.errors.aadharCard ? 'booking-modal__input--error' : ''}`}
                                placeholder="Enter 12-digit Aadhar number (optional)"
                                value={customerData.aadharCard || ''}
                                onChange={(e) => handleChange('aadharCard', e.target.value.replace(/\D/g, '').slice(0, 12))}
                                disabled={loading}
                            />
                            {validation.errors.aadharCard && (
                                <span className="booking-modal__error">{validation.errors.aadharCard}</span>
                            )}
                        </div>
                    </div>

                    {/* Row 3: Additional Notes (Full Width) */}
                    <div className="booking-modal__field booking-modal__field--full">
                        <label className="booking-modal__label" htmlFor="modal-notes">
                            Additional Notes
                        </label>
                        <textarea
                            id="modal-notes"
                            className="booking-modal__textarea"
                            placeholder="Any special requirements or notes..."
                            value={notes}
                            onChange={(e) => onNotesChange(e.target.value)}
                            rows={3}
                            disabled={loading}
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="booking-modal__error-message">
                            {error}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="booking-modal__submit"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Request Appointment'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default BookingModal;

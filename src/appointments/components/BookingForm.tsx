// BookingForm Component - Customer details form for booking
import React from 'react';
import type { CustomerFormData, CustomerValidation } from '../types/customer';

interface BookingFormProps {
    customerData: CustomerFormData;
    onChange: (data: CustomerFormData) => void;
    validation: CustomerValidation;
    notes: string;
    onNotesChange: (notes: string) => void;
    disabled?: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({
    customerData,
    onChange,
    validation,
    notes,
    onNotesChange,
    disabled = false
}) => {
    const handleChange = (field: keyof CustomerFormData, value: string) => {
        onChange({
            ...customerData,
            [field]: value
        });
    };

    return (
        <div className="booking-form">
            <h3 className="booking-form__title">Your Details</h3>

            <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="name">
                    Full Name <span className="booking-form__required">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    className={`booking-form__input ${validation.errors.name ? 'booking-form__input--error' : ''}`}
                    placeholder="Enter your full name"
                    value={customerData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    disabled={disabled}
                />
                {validation.errors.name && (
                    <span className="booking-form__error">{validation.errors.name}</span>
                )}
            </div>

            <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="phone">
                    Phone Number <span className="booking-form__required">*</span>
                </label>
                <input
                    type="tel"
                    id="phone"
                    className={`booking-form__input ${validation.errors.phone ? 'booking-form__input--error' : ''}`}
                    placeholder="Enter 10-digit phone number"
                    value={customerData.phone}
                    onChange={(e) => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                    disabled={disabled}
                />
                {validation.errors.phone && (
                    <span className="booking-form__error">{validation.errors.phone}</span>
                )}
            </div>

            <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="email">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    className={`booking-form__input ${validation.errors.email ? 'booking-form__input--error' : ''}`}
                    placeholder="Enter your email (optional)"
                    value={customerData.email || ''}
                    onChange={(e) => handleChange('email', e.target.value)}
                    disabled={disabled}
                />
                {validation.errors.email && (
                    <span className="booking-form__error">{validation.errors.email}</span>
                )}
            </div>

            <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="aadhar">
                    Aadhar Number
                </label>
                <input
                    type="text"
                    id="aadhar"
                    className={`booking-form__input ${validation.errors.aadharCard ? 'booking-form__input--error' : ''}`}
                    placeholder="Enter 12-digit Aadhar number (optional)"
                    value={customerData.aadharCard || ''}
                    onChange={(e) => handleChange('aadharCard', e.target.value.replace(/\D/g, '').slice(0, 12))}
                    disabled={disabled}
                />
                {validation.errors.aadharCard && (
                    <span className="booking-form__error">{validation.errors.aadharCard}</span>
                )}
            </div>

            <div className="booking-form__field">
                <label className="booking-form__label" htmlFor="notes">
                    Additional Notes
                </label>
                <textarea
                    id="notes"
                    className="booking-form__textarea"
                    placeholder="Any special requirements or notes..."
                    value={notes}
                    onChange={(e) => onNotesChange(e.target.value)}
                    rows={3}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};

export default BookingForm;

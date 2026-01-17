// BookingConfirmation Component - Shows booking confirmation after submission
import React from 'react';
import type { BookingResponse } from '../types/booking';
import { formatTime12Hour } from '../utils/timeUtils';
import { formatDateFull } from '../utils/dateUtils';

interface BookingConfirmationProps {
    booking: BookingResponse;
    onBookAnother: () => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
    booking,
    onBookAnother
}) => {
    return (
        <div className="booking-confirmation">
            <div className="booking-confirmation__icon">
                ✅
            </div>

            <h2 className="booking-confirmation__title">
                Booking Request Submitted!
            </h2>

            <p className="booking-confirmation__message">
                Your appointment request has been submitted successfully.
                You will receive a confirmation message once approved.
            </p>

            <div className="booking-confirmation__details">
                <div className="booking-confirmation__reference">
                    <span className="booking-confirmation__label">Booking ID</span>
                    <span className="booking-confirmation__value booking-confirmation__value--highlight">
                        {booking.bookingReference || booking.bookingId || booking._id?.slice(-8).toUpperCase() || 'Pending'}
                    </span>
                </div>

                <div className="booking-confirmation__info">
                    <div className="booking-confirmation__row">
                        <span className="booking-confirmation__label">📅 Date</span>
                        <span className="booking-confirmation__value">
                            {formatDateFull(booking.slot.date)}
                        </span>
                    </div>

                    <div className="booking-confirmation__row">
                        <span className="booking-confirmation__label">⏰ Time</span>
                        <span className="booking-confirmation__value">
                            {formatTime12Hour(booking.slot.startTime)}
                        </span>
                    </div>

                    <div className="booking-confirmation__row">
                        <span className="booking-confirmation__label">👤 Name</span>
                        <span className="booking-confirmation__value">
                            {booking.customer.name}
                        </span>
                    </div>

                    <div className="booking-confirmation__row">
                        <span className="booking-confirmation__label">📱 Phone</span>
                        <span className="booking-confirmation__value">
                            {booking.customer.phone}
                        </span>
                    </div>

                    <div className="booking-confirmation__row">
                        <span className="booking-confirmation__label">📋 Status</span>
                        <span className="booking-confirmation__value booking-confirmation__status booking-confirmation__status--pending">
                            Pending Approval
                        </span>
                    </div>
                </div>
            </div>

            <div className="booking-confirmation__note">
                <strong>📧 Important:</strong> Please save your reference number.
                You can use it to check your booking status or cancel your request.
            </div>

            <button
                className="booking-confirmation__button"
                onClick={onBookAnother}
            >
                Book Another Appointment
            </button>
        </div>
    );
};

export default BookingConfirmation;

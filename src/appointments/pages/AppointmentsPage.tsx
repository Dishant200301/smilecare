// AppointmentsPage - Main booking page (COMMON across all client websites)
import React, { useState } from 'react';
import { useSlots } from '../hooks/useSlots';
import { useBooking } from '../hooks/useBooking';
import DateSelector from '../components/DateSelector';
import TimeSlotGrid from '../components/TimeSlotGrid';
import BookingModal from '../components/BookingModal';
import BookingConfirmation from '../components/BookingConfirmation';
import BookingStatus from '../components/BookingStatus';
import { formatDateFull } from '../utils/dateUtils';
import { formatTime12Hour, isTimePassed } from '../utils/timeUtils';
import './AppointmentsPage.css';
import '../components/BookingModal.css';

type ViewMode = 'booking' | 'status';

const AppointmentsPage: React.FC = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('booking');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Hooks
    const {
        slots,
        loading: slotsLoading,
        selectedDate,
        setSelectedDate,
        slotsByDate
    } = useSlots();

    const {
        customerData,
        setCustomerData,
        selectedSlot,
        setSelectedSlot,
        notes,
        setNotes,
        validation,
        loading: bookingLoading,
        error,
        bookingResponse,
        submitBooking,
        checkStatus,
        cancelBooking,
        resetForm
    } = useBooking();

    // Calculate slot counts for date selector (excluding passed slots)
    const slotCounts: { [date: string]: number } = {};
    Object.entries(slotsByDate).forEach(([date, dateSlots]) => {
        slotCounts[date] = dateSlots.filter(s =>
            s.status === 'active' && !isTimePassed(s.date, s.startTime)
        ).length;
    });

    // Handle slot selection - Open modal
    const handleSlotSelect = (slot: typeof selectedSlot) => {
        setSelectedSlot(slot);
        setIsModalOpen(true);
    };

    // Handle modal close
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    // Handle booking submission
    const handleSubmit = async () => {
        const success = await submitBooking();
        if (success) {
            setIsModalOpen(false);
            setShowConfirmation(true);
        }
    };

    // Handle book another
    const handleBookAnother = () => {
        resetForm();
        setShowConfirmation(false);
    };


    return (
        <div className="appointments-page">
            {/* Header */}
            <header className="appointments-page__header">
                <h1 className="appointments-page__title">Book an Appointment</h1>
                <p className="appointments-page__subtitle">
                    Select a convenient date and time for your appointment
                </p>
            </header>

            <main className="appointments-page__content">
                {showConfirmation && bookingResponse ? (
                    <BookingConfirmation
                        booking={bookingResponse}
                        onBookAnother={handleBookAnother}
                    />
                ) : (
                    <>
                        {/* Date Selector and Time Slots - Combined */}
                        <section className="appointments-page__section">
                            <h2 className="appointments-page__section-title">
                                Select Date
                            </h2>
                            <DateSelector
                                selectedDate={selectedDate}
                                onSelectDate={setSelectedDate}
                                slotCounts={slotCounts}
                            />

                            <div className="appointments-page__divider"></div>

                            <TimeSlotGrid
                                slots={slots}
                                selectedSlot={selectedSlot}
                                onSelectSlot={handleSlotSelect}
                                loading={slotsLoading}
                            />
                        </section>

                        {/* Booking Modal */}
                        <BookingModal
                            isOpen={isModalOpen}
                            onClose={handleModalClose}
                            selectedSlot={selectedSlot}
                            customerData={customerData}
                            onChange={setCustomerData}
                            validation={validation}
                            notes={notes}
                            onNotesChange={setNotes}
                            onSubmit={handleSubmit}
                            loading={bookingLoading}
                            error={error}
                        />
                    </>
                )}
            </main>
        </div>
    );
};

export default AppointmentsPage;

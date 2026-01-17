// Booking Types - Public facing bookings
export interface BookingRequest {
    slotId: string;
    customerName: string;
    customerPhone: string;
    customerEmail?: string;
    customerAadhar?: string;
    notes?: string;
    date: string;
    startTime: string;
}

export interface BookingResponse {
    _id: string;
    bookingReference?: string;
    bookingId?: string;
    status: 'pending' | 'booked' | 'attended' | 'not-attended' | 'rejected';
    slot: {
        date: string;
        startTime: string;
        endTime: string;
        durationMinutes: number;
    };
    customer: {
        name: string;
        phone: string;
        email?: string;
    };
    createdAt: string;
    message?: string;
}

export interface BookingStatusCheck {
    bookingReference: string;
    phone: string;
}

// useSlots Hook - Manage available slots state and fetching
import { useState, useEffect, useCallback } from 'react';
import { publicSlotService } from '../services/slotService';
import type { PublicSlot, SlotsByDate } from '../types/slot';
import { formatDateToString } from '../utils/dateUtils';

interface UseSlotsReturn {
    slots: PublicSlot[];
    slotsByDate: SlotsByDate;
    loading: boolean;
    error: string | null;
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
    refreshSlots: () => Promise<void>;
    getAvailableSlots: (date: Date) => PublicSlot[];
}

export const useSlots = (initialDate: Date = new Date()): UseSlotsReturn => {
    const [slots, setSlots] = useState<PublicSlot[]>([]);
    const [slotsByDate, setSlotsByDate] = useState<SlotsByDate>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date>(initialDate);

    // Fetch slots for selected date
    const fetchSlots = useCallback(async (date: Date) => {
        setLoading(true);
        setError(null);

        try {
            const dateStr = formatDateToString(date);
            const response = await publicSlotService.getAvailableSlots(dateStr);

            if (response.success) {
                setSlots(response.data);
                setSlotsByDate(prev => ({
                    ...prev,
                    [dateStr]: response.data
                }));
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load slots');
            setSlots([]);
        } finally {
            setLoading(false);
        }
    }, []);

    // Fetch slots for a date range (for calendar preview)
    const fetchSlotsRange = useCallback(async (startDate: Date, endDate: Date) => {
        try {
            const response = await publicSlotService.getAvailableSlotsRange(
                formatDateToString(startDate),
                formatDateToString(endDate)
            );

            if (response.success) {
                setSlotsByDate(response.data);
            }
        } catch (err) {
            console.error('Failed to fetch slots range:', err);
        }
    }, []);

    // Refresh current date slots
    const refreshSlots = useCallback(async () => {
        await fetchSlots(selectedDate);
    }, [fetchSlots, selectedDate]);

    // Get available slots for a specific date from cache
    const getAvailableSlots = useCallback((date: Date): PublicSlot[] => {
        const dateStr = formatDateToString(date);
        return slotsByDate[dateStr] || [];
    }, [slotsByDate]);

    // Fetch on date change
    useEffect(() => {
        fetchSlots(selectedDate);
    }, [selectedDate, fetchSlots]);

    // Prefetch next 7 days on mount
    useEffect(() => {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 7);
        fetchSlotsRange(new Date(), endDate);
    }, [fetchSlotsRange]);

    return {
        slots,
        slotsByDate,
        loading,
        error,
        selectedDate,
        setSelectedDate,
        refreshSlots,
        getAvailableSlots
    };
};

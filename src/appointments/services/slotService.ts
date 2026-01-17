// Public Slot Service - API calls for fetching available slots (no auth required)
import { getApiUrl, getPublicHeaders } from '../utils/apiConfig';
import type { PublicSlot, SlotsByDate } from '../types/slot';

const API_URL = getApiUrl();

export const publicSlotService = {
    /**
     * Get available slots for a specific date
     * This is a PUBLIC endpoint - no authentication required
     */
    async getAvailableSlots(date: string): Promise<{ success: boolean; data: PublicSlot[]; count: number }> {
        const params = new URLSearchParams({ date });

        const response = await fetch(`${API_URL}/public/slots/available?${params}`, {
            headers: getPublicHeaders()
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to fetch available slots');
        }

        return response.json();
    },

    /**
     * Get available slots for a date range (for calendar view)
     * This is a PUBLIC endpoint - no authentication required
     */
    async getAvailableSlotsRange(
        startDate: string,
        endDate: string
    ): Promise<{ success: boolean; data: SlotsByDate }> {
        const params = new URLSearchParams({ startDate, endDate });

        const response = await fetch(`${API_URL}/public/slots/range?${params}`, {
            headers: getPublicHeaders()
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to fetch slots for date range');
        }

        return response.json();
    },

    /**
     * Get slot details by ID
     * This is a PUBLIC endpoint - no authentication required
     */
    async getSlotDetails(slotId: string): Promise<{ success: boolean; data: PublicSlot }> {
        const response = await fetch(`${API_URL}/public/slots/${slotId}`, {
            headers: getPublicHeaders()
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to fetch slot details');
        }

        return response.json();
    }
};

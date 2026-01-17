// DateSelector Component - Horizontal scrollable date picker
import React from 'react';
import { getNextDays, formatDateToString, isToday, getRelativeDayName } from '../utils/dateUtils';

interface DateSelectorProps {
    selectedDate: Date;
    onSelectDate: (date: Date) => void;
    daysToShow?: number;
    slotCounts?: { [date: string]: number };
}

const DateSelector: React.FC<DateSelectorProps> = ({
    selectedDate,
    onSelectDate,
    daysToShow = 5,
    slotCounts = {}
}) => {
    const dates = getNextDays(daysToShow);

    return (
        <div className="date-selector">
            <div className="date-selector__scroll-container">
                {dates.map((date) => {
                    const dateStr = formatDateToString(date);
                    const isSelected = formatDateToString(selectedDate) === dateStr;
                    const dayName = getRelativeDayName(date);

                    return (
                        <button
                            key={dateStr}
                            onClick={() => onSelectDate(date)}
                            className={`
                                date-selector__item
                                ${isSelected ? 'date-selector__item--selected' : ''}
                                ${isToday(date) ? 'date-selector__item--today' : ''}
                            `}
                        >
                            <span className="date-selector__day-name">
                                {dayName}
                            </span>
                            <span className="date-selector__date-number">
                                {date.getDate()}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default DateSelector;

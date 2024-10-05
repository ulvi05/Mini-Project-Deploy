import React, { useState } from 'react';
import { DateRange, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePickerProps } from '@/types';

const DateRangePicker: React.FC<DateRangePickerProps> = ({
    onDateChange,
    reservedDates = [],
    moveRangeOnFirstSelection = false,
    retainEndDateOnFirstSelection = false,
    rangeColors = ['#2E2E2E'],
    ranges = [
        {
            startDate: null,
            endDate: null,
            key: 'selection',
        },
    ],
}) => {
    const [state, setState] = useState(ranges);

    const handleRangeChange = (item: RangeKeyDict) => {
        const selection = item['selection']; // Doğru key ile erişim sağlanıyor
        if (selection) {
            setState([selection]);

            // startDate ve endDate için null kontrolü yapılıyor
            const startDate = selection.startDate ?? null;
            const endDate = selection.endDate ?? null;

            onDateChange({ startDate, endDate });
        }
    };

    const disableDate = (date: Date) => {
        return reservedDates.some(reservedDate =>
            date >= reservedDate && date <= new Date(reservedDate.setDate(reservedDate.getDate() + 1))
        );
    };

    return (
        <div>
            <DateRange
                editableDateInputs={true}
                onChange={handleRangeChange}
                moveRangeOnFirstSelection={moveRangeOnFirstSelection}
                retainEndDateOnFirstSelection={retainEndDateOnFirstSelection}
                ranges={state}
                rangeColors={rangeColors}
                minDate={new Date()}
                disabledDates={reservedDates.map(date => new Date(date)).filter(disableDate)}
            />
        </div>
    );
};

export default DateRangePicker;

import React, { useEffect } from 'react';

interface PriceCalculatorProps {
    pricePerWeek: number;
    startDate: Date | null;
    endDate: Date | null;
    onTotalPriceChange: (totalPrice: number | null) => void;
}

const PriceCalculator: React.FC<PriceCalculatorProps> = ({ pricePerWeek, startDate, endDate, onTotalPriceChange }) => {
    useEffect(() => {
        if (!startDate || !endDate) {
            onTotalPriceChange(null);
            return;
        }

        const timeDiff = endDate.getTime() - startDate.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        const pricePerDay = pricePerWeek / 7;
        const totalPrice = daysDiff * pricePerDay;

        onTotalPriceChange(totalPrice);
    }, [startDate, endDate, pricePerWeek, onTotalPriceChange]);

    if (!startDate || !endDate) {
        return <p className="text-red-500 mb-1">Please select a date range.</p>;
    }

    const timeDiff = endDate.getTime() - startDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const pricePerDay = pricePerWeek / 7;
    const totalPrice = daysDiff * pricePerDay;

    return (
        <p className="font-semibold mb-1">
            Total for {daysDiff} days: {totalPrice.toFixed(2)} $
        </p>
    );
};

export default PriceCalculator;

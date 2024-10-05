"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import DateRangePicker from '../../_components/DateRangePicker/CalendarPicker';
import { Product } from '@prisma/client';
import { Button } from '@/components/ui/button';
import PriceCalculator from '../price-calculator/PriceCalculator';
import { createCheckoutSession } from '@/actions/checkout';
import { toast } from 'sonner';

function ProductDetailClient({ product, reservedDates, userId }: { product: Product; reservedDates: Date[], userId: string | null }) {
    const router = useRouter();
    const [dateRange, setDateRange] = useState<{ startDate: Date | null; endDate: Date | null }>({
        startDate: null,
        endDate: null,

    });
    const [totalPrice, setTotalPrice] = useState<number | null>(null);

    const handleDateChange = (range: { startDate: Date | null; endDate: Date | null }) => {
        setDateRange(range);
    };

    const handleReserveNow = async () => {
        if (dateRange.startDate && dateRange.endDate) {
            if (dateRange.startDate && dateRange.endDate && totalPrice !== null) {
                try {
                    const { url } = await createCheckoutSession(totalPrice, product.id, userId as string, dateRange.startDate, dateRange.endDate);

                    if (url) {
                        router.push(url);
                    } else {
                        toast.error("Checkout transaction could not be created.");
                    }
                } catch (error) {
                    toast.error("An error occurred. Please try again.");
                }
            } else {
                toast.warning("Please select your reservation dates.");
            }
        };
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="relative w-full h-80 mb-8">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-8 w-full max-w-6xl mx-auto">
                <div className="flex flex-col gap-2 md:w-1/2">
                    <h1 className="text-4xl font-semibold mb-2">{product.name}</h1>
                    <p className="text-lg font-bold text-green-700 dark:text-gray-400 mb-4">${product.price} per week</p>
                    <p className="text-gray-700 mb-6 font-semibold">{product.description}</p>
                </div>
                <Card className="max-w-sm shadow-lg bg-white flex md:w-1/2">
                    <CardContent>
                        <DateRangePicker onDateChange={handleDateChange} reservedDates={reservedDates} />
                        <PriceCalculator
                            pricePerWeek={product.price}
                            startDate={dateRange.startDate}
                            endDate={dateRange.endDate}
                            onTotalPriceChange={setTotalPrice}
                        />
                        <Button onClick={handleReserveNow} className='w-full'>
                            Reserve Now
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default ProductDetailClient;

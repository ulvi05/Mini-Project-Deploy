"use client";

import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { createReservation } from "@/actions/createReservation";
import { toast } from 'sonner';

type SuccessPageProps = {
    userId: string | null;
};

const SuccessPage = ({ userId }: SuccessPageProps) => {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const productId = searchParams.get("productId");

    useEffect(() => {
        const startDate = searchParams.get("startDate") ? new Date(searchParams.get("startDate") as string) : null;
        const endDate = searchParams.get("endDate") ? new Date(searchParams.get("endDate") as string) : null;

        if (sessionId && productId && userId && startDate && endDate) {
            const reservationData = {
                userId,
                productId,
                startDate,
                endDate,
            };

            createReservation(reservationData)
                .then(() => {
                    toast.success("Reservation created successfully!");
                })
                .catch((error) => {
                    toast.error("Error creating reservation: " + error.message);
                });
        } else {
            toast.error("Invalid reservation data. Dates cannot be null.");
        }
    }, [sessionId, productId, userId, searchParams]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
            <p className="mt-4 text-lg text-gray-700">
                Your payment has been received successfully.
            </p>
        </div>
    );
};

export default SuccessPage;

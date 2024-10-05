"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { createReservation } from "@/actions/createReservation";
import { toast } from 'sonner';

const SuccessPage = ({ userId }: { userId: string | null }) => {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const productId = searchParams.get("productId");
    const startDate = new Date(searchParams.get("startDate") as string);
    const endDate = new Date(searchParams.get("endDate") as string);

    useEffect(() => {
        if (sessionId && productId && userId) {
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
        }
    }, [sessionId, productId, userId]);

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

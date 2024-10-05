"use server";

import prisma from "@/lib/prisma";
import { ReservationProps } from "@/types";

export const createReservation = async (data: ReservationProps) => {
    const user = await prisma.user.findUnique({
        where: { externalID: data.userId },
    });

    if (!user) {
        throw new Error('User Not Found');
    }

    const reservation = await prisma.reservation.create({
        data: {
            userId: user.id,
            productId: data.productId,
            startDate: data.startDate,
            endDate: data.endDate,
        },
    });

    return reservation;
};

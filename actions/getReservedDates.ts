"use server";

import prisma from "@/lib/prisma";

export const getReservedDates = async (productId: string): Promise<Date[]> => {
    const reservations = await prisma.reservation.findMany({
        where: {
            productId: productId,
        },
        select: {
            startDate: true,
            endDate: true,
        },
    });


    const reservedDates = reservations.reduce((acc: Date[], reservation) => {
        const currentDate = new Date(reservation.startDate);
        const endDate = new Date(reservation.endDate);

        while (currentDate <= endDate) {
            acc.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return acc;
    }, []);


    return reservedDates;
};
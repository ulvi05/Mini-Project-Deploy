"use server";
import prisma from '@/lib/prisma';
import { Product } from '@/types';



export default async function getProductClient() {
    const products: Product[] = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            price: true,
            description: true,
            imageUrl: true,
            createdAt: true,
            updatedAt: true,
            categoryId: true,
            category: {
                select: {
                    id: true,
                    name: true,
                    createdAt: true,
                    updatedAt: true,
                },
            },
        },
        take: 8,
    });
    return products;
}
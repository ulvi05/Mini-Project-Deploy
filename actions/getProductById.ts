"use server";

import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";

export async function getProductById(id: string): Promise<Product | null> {
    return await prisma.product.findUnique({
        where: { id },
    });
}

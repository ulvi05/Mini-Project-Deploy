"use server";

import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";

type Props = Omit<Product, "id" | "createdAt" | "updatedAt">

export async function createProduct(data: Props) {
    const Product = await prisma.product.create({
        data,
    })


    revalidatePath('/dashboard/products');
    return Product;
}
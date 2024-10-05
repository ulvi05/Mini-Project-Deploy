"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createCategory({ name }: { name: string }) {
    await new Promise((res) => setTimeout(res, 2000));
    const Category = await prisma.category.create({
        data: {
            name,
        }
    })

    revalidatePath('/dashboard/categories');
    return Category
}

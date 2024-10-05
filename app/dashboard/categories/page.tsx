import React from 'react';
import { DataTable } from '../_components/admin/categories/DataTable';
import prisma from '@/lib/prisma';
import { Category } from "@/types/index";
import { CreateCategoryDialog } from '../_components/admin/categories/CreateDialog';

const Categories = async () => {
    const categories: Category[] = await prisma.category.findMany({
        select: {
            id: true,
            name: true,
            createdAt: true,
            updatedAt: true,
        },
    });

    return (
        <div className='m-auto p-6'>
            <div className='flex items-center justify-between mb-4'>
                <h1 className='text-4xl font-bold mb-2'>Categories</h1>
                <CreateCategoryDialog />
            </div>
            <DataTable categories={categories} />
        </div>
    );
};

export default Categories;

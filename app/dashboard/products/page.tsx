import React from 'react';
import prisma from '@/lib/prisma';
import { Category, Product } from "@/types/index";
import { ProductTable } from '../_components/admin/products/ProductTable';
import { CreateProductDialog } from '../_components/admin/products/CreateProductDialog';

const Products = async (): Promise<React.JSX.Element> => {
    const productsPromise: Product[] = await prisma.product.findMany({
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
    });

    const categoriesPromise: Category[] = await prisma.category.findMany({
        select: {
            id: true,
            name: true,
            createdAt: true,
            updatedAt: true,
        }
    })

    const [products, categories] = await Promise.all([productsPromise, categoriesPromise])


    return (
        <div className='m-auto p-6'>
            <div className='flex items-center justify-between mb-4'>
                <h1 className='text-4xl font-bold mb-2'>Products</h1>
                <CreateProductDialog categories={categories} />
            </div>
            <ProductTable products={products} />
        </div>
    );
};

export default Products;

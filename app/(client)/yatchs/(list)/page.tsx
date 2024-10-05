import React from 'react'
import ProductCard from '../../_components/product-card'
import prisma from '@/lib/prisma'
import { SortOrder } from '@/types'
import { Record } from '@prisma/client/runtime/library'

type Props = {
    searchParams: {
        sort: SortOrder;
        [key: string]: string;
    }
}

export default async function Yatch({ searchParams }: Props) {
    const orderBy: Record<string, string> = {}
    const { sort, ...filters } = searchParams;
    if (sort) {
        const searchKey = sort.split('_')[0];
        const searchValue = sort.split('_')[1];
        orderBy[searchKey] = searchValue;
    }
    const filter: Record<string, { id: { in: string[] } }> = {};

    Object.keys(filters).forEach((key) => {
        filter[key] = {
            id: {
                in: Array.isArray(filters[key]) ? filters[key] : [filters[key]],
            },
        };
    });

    const products = await prisma.product.findMany({
        where: { ...filter },
        orderBy,
    });

    return (
        <section className='mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-5 gap-x-3 mt-10 mb-5'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    )
}

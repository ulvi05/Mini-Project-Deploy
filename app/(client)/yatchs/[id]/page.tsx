import React from 'react';
import { getProductById } from '@/actions/getProductById';
import { getReservedDates } from '@/actions/getReservedDates';
import ProductDetailClient from '../../_components/yatchs/ProductDetailClient';
import { auth } from '@clerk/nextjs/server';

type Props = {
    params: {
        id: string;
    };
};

const ProductDetail = async ({ params }: Props) => {
    const { userId } = auth();
    const product = await getProductById(params.id);
    const reservedDates = await getReservedDates(params.id);

    if (!product) {
        return <div>Product not found!</div>;
    }
    return (
        <ProductDetailClient product={product} reservedDates={reservedDates} userId={userId} />
    );
};

export default ProductDetail;

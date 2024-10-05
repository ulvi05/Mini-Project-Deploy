import React, { PropsWithChildren } from 'react'
import Filter from '../../_components/filter'
import prisma from '@/lib/prisma'


const TableLayout = async ({ children }: PropsWithChildren) => {
    const categories = await prisma.category.findMany();
    return (
        <div>
            <Filter categories={categories}>
                {children}
            </Filter>
        </div>
    )
}

export default TableLayout
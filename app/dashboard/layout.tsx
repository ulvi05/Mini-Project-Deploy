import React, { PropsWithChildren } from 'react'
import AdminHeader from './_components/admin/Header'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { Role } from '@prisma/client'



const ClientLayout = async ({ children }: PropsWithChildren): Promise<React.JSX.Element> => {
    const { userId } = auth()
    if (!userId) redirect('/sign-in');
    const user = await prisma.user.findUnique({
        where: {
            externalID: userId
        },
    });

    if (user?.role !== Role.ADMIN) {
        redirect('/');
    }

    return (
        <div>
            <AdminHeader />
            {children}
        </div>
    )
}

export default ClientLayout
import React, { PropsWithChildren } from 'react'
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'


const ClientLayout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default ClientLayout
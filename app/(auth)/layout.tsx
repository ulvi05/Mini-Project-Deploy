import React, { PropsWithChildren } from 'react'

const AuthLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className='grid place-content-center h-screen'>
            {children}
        </div>
    )
}

export default AuthLayout
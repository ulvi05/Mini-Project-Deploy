import Link from "next/link"

const CancelPayment = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600">Payment Canceled!</h1>
            <p className="mt-4 text-lg text-gray-700">
                Your payment has been canceled. If you encountered an issue, please try again or contact support.
            </p>
            <Link href={"/"} className="mt-6 text-blue-500 hover:underline">Return to Homepage</Link>
        </div>
    )
}

export default CancelPayment
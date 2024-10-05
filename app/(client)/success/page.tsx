import Link from "next/link";


const SuccessPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
            <p className="mt-4 text-lg text-gray-700">
                Your payment has been received successfully.
            </p>
            <Link href='/' className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-center">Go To Homepage</Link>
        </div>
    );
};
export default SuccessPage;

import React from 'react';
import Link from 'next/link';

const Dashboard = (): React.JSX.Element => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/dashboard/products" className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-50 transition">
                    <h2 className="text-2xl font-bold text-gray-800">Manage Products</h2>
                    <p className="text-gray-600">View, add, or edit products.</p>
                </Link>
                <Link href="/dashboard/categories" className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-50 transition">
                    <h2 className="text-2xl font-bold text-gray-800">Manage Categories</h2>
                    <p className="text-gray-600">View, add, or edit categories.</p>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;

import React from 'react';

const About = () => {
    return (
        <div className="w-full h-full bg-[url('../public/assets/Azimut-Grande-35-metri-for-sale-Italy.jpg')] bg-cover bg-center">
            <main className="flex flex-col items-center justify-center px-4 py-16 bg-white bg-opacity-70 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
                <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">
                    Welcome to Sail Haven, where we connect you to the best boat rental experiences around the world.
                    Our mission is to help you discover new adventures on the water, providing you with a wide selection
                    of boats and resources to make your trip unforgettable. Whether you’re looking for a relaxing day on
                    the lake or an exciting voyage at sea, we have the perfect boat for you.
                </p>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Us?</h2>
                <ul className="list-disc list-inside text-gray-600 mb-8">
                    <li>Extensive selection of boats for all types of adventures</li>
                    <li>Competitive pricing to fit your budget</li>
                    <li>Expert customer service to assist you in finding the right boat</li>
                    <li>Secure and easy booking process</li>
                </ul>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 text-center max-w-2xl">
                    At Sail Haven, we envision a world where everyone can enjoy the beauty of the sea. We aim to inspire
                    people to explore the waters, create unforgettable memories, and connect with nature.
                </p>
            </main>
        </div>
    );
}

export default About;

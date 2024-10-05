import { Button } from '@/components/ui/button';
import React from 'react';

const Contact = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="flex flex-col items-center justify-center w-1/2 bg-white p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
                <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
                    Have questions? Please enter your email below to get in touch!
                </p>
                <form className="w-full max-w-md">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full bg-black hover:bg-gray-600 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline">
                        Send Message
                    </Button>
                </form>
            </div>
            <div className="w-1/2 bg-[url('../public/assets/coming-soon.webp')] bg-cover bg-center"></div>
        </div>
    );
}

export default Contact;

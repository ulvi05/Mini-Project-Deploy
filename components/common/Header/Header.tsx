import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/assets/logo.svg';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';
import { Role } from '@prisma/client';
import { RenderIf } from '../render-if';
import BurgerMenuToggle from '@/app/(client)/_components/BurgerMenuToggle/BurgerMenuToggle';

const Header = async () => {
    const { userId } = auth();
    const user = userId ? await prisma.user.findUnique({ where: { externalID: userId } }) : null;
    const isAdmin = user?.role === Role.ADMIN;

    return (
        <header className="text-white p-2 shadow-md">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={Logo} className="h-8" alt="Logo" width={50} height={50} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">Sail Haven</span>
                    </Link>

                    <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
                        <RenderIf condition={isAdmin}>
                            <Link href="/dashboard" className="mr-2 p-2 text-sm font-medium text-gray-700 rounded-lg hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:inline-flex md:items-center md:justify-center transition duration-300 ease-in-out">
                                Dashboard
                            </Link>
                        </RenderIf>


                        <BurgerMenuToggle />

                        {userId ? <UserButton /> : (
                            <SignInButton>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Sign In
                                </button>
                            </SignInButton>
                        )}
                    </div>

                    <div className="hidden md:flex items-center justify-between w-full md:w-auto md:order-1">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link href="/" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/yatchs" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Explore
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Finger1Img from "@/public/assets/finger-1.svg"
import Finger2Img from "@/public/assets/finger-2.svg"
import Finger3Img from "@/public/assets/finger-3.svg"
import Finger4Img from "@/public/assets/finger-4.svg"
import BoatInfo from "@/public/assets/boat-home.webp"

import ProductCard from "./_components/product-card";
import getProductClient from "@/actions/getProductClient";
import { Product } from "@/types";
import Link from "next/link";


const DestinationSwiper = dynamic(() => import('@/components/common/Swiper'), {
  ssr: false,
  loading: () =>
    <div className="flex gap-4">
      <Skeleton className="w-full h-96 bg-gradient-to-r from-gray-300 to-gray-200 bg-opacity-80 animate-pulse" />
      <Skeleton className="w-full h-96 bg-gradient-to-r from-gray-300 to-gray-200 bg-opacity-80 animate-pulse" />
      <Skeleton className="w-full h-96 bg-gradient-to-r from-gray-300 to-gray-200 bg-opacity-80 animate-pulse" />
    </div>
});

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await getProductClient();
      setProducts(fetchedProducts);
    }

    fetchProducts();
  }, []);
  return (
    <div className="w-full h-full bg-gray-100">
      <main className="w-full h-full flex items-start justify-start px-4 pb-28 pt-48 bg-cover bg-center bg-[url('../public/assets/yatch.png')] min-h-full">
        <form className="relative z-[2] w-full max-w-[450px] rounded-lg bg-white p-6 shadow-2xl sm:m-0 sm:max-w-[380px] sm:p-7 sm:pt-9 md:max-w-[400px] md:shadow-none lg:rounded-xl xl:max-w-[460px] xl:p-9 4xl:max-w-[516px] 4xl:p-12">
          <div className="mb-6 sm:mb-4">
            <span className="block mb-2 text-lg font-playwrite text-gray-700">
              Enjoy your Trip!
            </span>
            <h1 className="text-2xl font-bold text-gray-800 uppercase leading-tight mb-3 md:text-3xl md:leading-[2.5rem] lg:text-4xl lg:leading-[3rem] 4xl:text-5xl 4xl:leading-[3.5rem]">
              Discover the new world
            </h1>
            <p className="text-gray-600 text-base leading-6 hidden sm:block sm:text-lg sm:leading-7 md:text-xl md:leading-8 3xl:leading-9 4xl:mb-6 4xl:text-lg">
              Compare prices from 200+ booking sites to help you find the lowest price on the right hotel for you.
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-4 mb-6 w-full">
          </div>
          <Button className="w-full p-5" type="button">
            <Link href={'/yatchs'}>Find Boat</Link>
          </Button>
        </form>
      </main>
      <section className="lg:container-fluid mt-12 pl-4 sm:pl-6 lg:mt-16">
        <div className="flex justify-between capitalize mb-4 md:mb-5 xl:mb-6">
          <div>
            <h1 className="md:text-h2 font-bold text-gray-dark text-xl capitalize !leading-8 md:!text-2xl lg:!leading-[48px] 4xl:!leading-[48px] 4xl:!text-3xl">
              Top destinations for boat rentals
            </h1>
            <p className="text-gray-dark text-sm md:text-base font-normal capitalize leading-6 text-gray-600 4xl:text-lg">
              Unsatiable it considered invitation he traveling insensible.
            </p>
          </div>
        </div>
        <div>
          <DestinationSwiper />
        </div>
      </section>
      <section className="lg:container-fluid mt-12 pl-4 sm:pl-6 lg:mt-16">
        <div className="flex justify-between capitalize mb-4 md:mb-5 xl:mb-6">
          <div>
            <h1 className="md:text-h2 font-bold text-gray-dark text-xl capitalize !leading-8 md:!text-2xl lg:!leading-[48px] 4xl:!leading-[48px] 4xl:!text-3xl">
              How to rent a boat
            </h1>
            <p className="text-gray-dark text-sm md:text-base font-normal capitalize leading-6 text-gray-600 4xl:text-lg">
              Unsatiable it considered invitation he traveling insensible.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid xl:grid-cols-4">
          <div className="card-gradient flex flex-col justify-start rounded-xl border-2 p-6 transition-all duration-500 lg:p-7 4xl:p-12">
            <Image src={Finger1Img} alt="finger" width={64} height={64} />
            <h4 className="pb-3 pt-8 text-lg font-bold leading-[34px] text-gray-dark lg:text-xl xl:pt-6 4xl:pt-9">Find the perfect boat</h4>
            <p className="text-sm font-normal capitalize leading-[22px] text-gray-light xl:leading-6 4xl:text-base 4xl:leading-7">Browse our 5,000 designer dresses and accessories online or at our Melbourne warehouse.</p>
          </div>
          <div className="card-gradient flex flex-col justify-start rounded-xl border-2 p-6 transition-all duration-500 lg:p-7 4xl:p-12">
            <Image src={Finger2Img} alt="finger" width={64} height={64} />
            <h4 className="pb-3 pt-8 text-lg font-bold leading-[34px] text-gray-dark lg:text-xl xl:pt-6 4xl:pt-9">Select a captain</h4>
            <p className="text-sm font-normal capitalize leading-[22px] text-gray-light xl:leading-6 4xl:text-base 4xl:leading-7">Find your perfect look among thousands of fashion pieces, here available for rent and purchase</p>
          </div>
          <div className="card-gradient flex flex-col justify-start rounded-xl border-2 p-6 transition-all duration-500 lg:p-7 4xl:p-12">
            <Image src={Finger3Img} alt="finger" width={64} height={64} />
            <h4 className="pb-3 pt-8 text-lg font-bold leading-[34px] text-gray-dark lg:text-xl xl:pt-6 4xl:pt-9">Many Pickup Locations</h4>
            <p className="text-sm font-normal capitalize leading-[22px] text-gray-light xl:leading-6 4xl:text-base 4xl:leading-7">Enjoy wearing it at your special event for a few days, or purchase it to make it part of your wardrobe</p>
          </div>
          <div className="card-gradient flex flex-col justify-start rounded-xl border-2 p-6 transition-all duration-500 lg:p-7 4xl:p-12">
            <Image src={Finger4Img} alt="finger" width={64} height={64} />
            <h4 className="pb-3 pt-8 text-lg font-bold leading-[34px] text-gray-dark lg:text-xl xl:pt-6 4xl:pt-9">Satisfied Customers</h4>
            <p className="text-sm font-normal capitalize leading-[22px] text-gray-light xl:leading-6 4xl:text-base 4xl:leading-7">Simply pop your dress back in the free prepaid satchel provided. We now handle all the dry cleaning.</p>
          </div>
        </div>
      </section>
      <section className="lg:container-fluid mt-12 pl-4 sm:pl-6 lg:mt-16">
        <div className="flex justify-between capitalize mb-4 md:mb-5 xl:mb-6">
          <div>
            <h1 className="md:text-h2 font-bold text-gray-dark text-xl capitalize !leading-8 md:!text-2xl lg:!leading-[48px] 4xl:!leading-[48px] 4xl:!text-3xl">
              Top boat rentals
            </h1>
            <p className="text-gray-dark text-sm md:text-base font-normal capitalize leading-6 text-gray-600 4xl:text-lg">
              Unsatiable it considered invitation he traveling insensible.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:gap-y-10">
          {products.length > 0 ? (
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <Skeleton className="h-64 w-full" />
          )}
        </div>
      </section>

      <div className="relative my-3 px-0 md:px-3 lg:my-8 2xl:px-4 3xl:px-5 4xl:px-6">
        <Image
          className="aspect-[18/5] bg-gray-200 object-cover rounded-xl md:rounded-2xl w-full"
          src={BoatInfo}
          alt="boat-home"
          width={1800}
          height={400}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start z-20 px-6 py-8 md:pl-10 max-w-[90%] sm:max-w-[450px] xl:max-w-[513px]">
          <h4 className="text-left text-white font-bold text-2xl sm:text-3xl xl:text-4xl 3xl:text-5xl mb-3 xl:mb-6">
            Your Care, Our Value
          </h4>
          <p className="mb-3 text-sm sm:text-base xl:text-lg text-white leading-relaxed">
            Find and book your dream boat through Yacht. Charter Fleet, the world's leading luxury boat comparison site.
          </p>
          <Button>
            <Link href={'/yatchs'}>View Boats</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import DubaiImg from '@/public/assets/dubai.webp';
import MiamiImg from '@/public/assets/miami.webp';
import Seattle from '@/public/assets/longIsland.webp';
import Croatia from '@/public/assets/croatia.webp';
import Australia from '@/public/assets/australia.webp';
import Link from 'next/link';




const DestinationSwiper = () => {

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide className="relative overflow-hidden rounded-lg h-60 group cursor-pointer">
                <Link href='/yatchs'>
                    <Image
                        src={MiamiImg}
                        alt='Miami'
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl font-bold">
                        Miami
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="relative overflow-hidden rounded-lg h-60 group cursor-pointer">
                <Link href='/yatchs'>
                    <Image
                        src={DubaiImg}
                        alt='Dubai'
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl font-bold">
                        Dubai
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="relative overflow-hidden rounded-lg h-60 group cursor-pointer">
                <Link href='/yatchs'>
                    <Image
                        src={Seattle}
                        alt='Long Island'
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl font-bold">
                        Seattle
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="relative overflow-hidden rounded-lg h-60 group cursor-pointer">
                <Link href='/yatchs'>
                    <Image
                        src={Croatia}
                        alt='Croatia'
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl font-bold">
                        Croatia
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="relative overflow-hidden rounded-lg h-60 group cursor-pointer">
                <Link href='/yatchs'>
                    <Image
                        src={Australia}
                        alt='Australia'
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl font-bold">
                        Australia
                    </div>
                </Link>
            </SwiperSlide>
        </Swiper >
    );
};

export default DestinationSwiper;

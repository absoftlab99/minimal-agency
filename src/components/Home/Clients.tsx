import React from 'react'
import l2r from '../../app/assets/l2r.png';
import r2l from '../../app/assets/r2l.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import ClientLogo from './ClientLogo';

interface ClientLogoItem {
    id: number;
    client_logo: string;
    client_name: string;
    client_url: string;
}

interface Props {
    clients: ClientLogoItem[];
}

const Clients: React.FC<Props> = ({ clients }) => {

    return (
        <div className='grid lg:place-content-center bg-white w-full md:pt-12 pb-24'>
            <div className='w-full lg:w-[1200px] xl:w-[1320px] px-4 md:px-0 mx-auto'>
                <div className="">
                    <div className="flex gap-2 items-center justify-center">
                        <Image src={l2r} width={26} height={7} alt='left to right chevern' />
                        <p className='text-[16px] md:text-[18px]'>যারা আমাদের ওপর আস্থা রেখেছেন</p>
                        <Image src={r2l} width={26} height={7} alt='right to left chevern' />
                    </div>
                    <h2 className='text-[24px] md:text-[30px] font-bold text-center mt-2'>আমাদের সেবা গ্রহন করেছেন</h2>
                </div>
                <div className="mt-5">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}

                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        loop={true}
                        modules={[Autoplay]}
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            1200: {
                                slidesPerView: 6,
                                spaceBetween: 30
                            }
                            // Add more breakpoints as needed
                        }}
                    >
                        {
                            clients.map((client) => (
                                <SwiperSlide key={client.id}>
                                    <ClientLogo
                                        client_logo={client.client_logo}
                                        client_name={client.client_name}
                                        client_url={client.client_url}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Clients;
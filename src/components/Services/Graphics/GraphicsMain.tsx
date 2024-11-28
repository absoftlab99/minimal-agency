'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { TbHeadphonesFilled } from 'react-icons/tb';
import ServiceCard from '../Mobile/ServiceCard';
import GraphicsHero from './GraphicsHero';

interface ServiceItem {
    id: number;
    title: string;
    serial: string;
    short_description: string;
    icon: string;
    card_class: string;
    divider_class: string;
    box_class: string;
}
const GraphicsMain = () => {
    const [animation, setAnimation] = useState(0);
    const [services, setServices] = useState<ServiceItem[]>([]);

    useEffect(() => {
        const fetchPortfolios = async () => {
            const res = await fetch('/marketing.json');
            const data = await res.json();
            setServices(data);
        };
        fetchPortfolios();
    }, []);

    return (
        <div className=''>
            <GraphicsHero></GraphicsHero>
            <div className='grid place-content-center py-10 md:py-28 bg-white'>
                <div className="w-full lg:w-[1200px] xl:w-[1320px] px-4 md:px-0 mx-auto">
    
                    <div className="grid grid-cols-12 justify-between items-center w-full gap-8 md:gap-4 mt-8 md:mt-12">
                        {
                            services.map(service => <ServiceCard
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            serial={service.serial}
                            short_description={service.short_description}
                            icon={service.icon}
                            card_class={service.card_class}
                            box_class={service.box_class}
                            divider_class={service.divider_class}
                            animation={animation}
                            setAnimation={setAnimation}
                            ></ServiceCard>)
                        }
                        <div className="col-span-12 md:col-span-6">
                            <Link href='tel:+8801798930232' className="new-bg rounded-lg p-8 flex flex-col items-center">
                                <h3 className='font-bold text-white text-[24px] text-center'>আমাদের সার্ভিস নিতে কল করুণ</h3>
                                <div className='bg-white p-3 rounded-full h-[60px] w-[60px] text-[35px] text-center text-error my-4 animate-bounce'>
                                    <TbHeadphonesFilled></TbHeadphonesFilled>
                                </div>
                                <p className='text-white'>যে কোন প্রয়োজনে কল করুণ</p>
                                <h3 className='font-bold text-white text-[24px] text-center'>+৮৮০ ১৭৯৮৯৩০২৩২</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GraphicsMain;
import Image from 'next/image';
import React from 'react';
import defaultIcon from '../../../app/assets/icons/brand-my-oppo.png';

interface ServiceProps {
    id: number;
    title: string;
    serial: string;
    short_description: string;
    icon: string;
    card_class: string;
    box_class: string;
    divider_class: string;
    animation: number;
    setAnimation: (value: number) => void;
}

const ServiceCard: React.FC<ServiceProps> = ({title, serial, short_description, icon, card_class, divider_class, id, animation, setAnimation, box_class}) => {
    return (
        <div className="col-span-12 md:col-span-3">
            <div onMouseEnter={() => setAnimation(id)} onMouseLeave={() => setAnimation(0)} className={`relative rounded-md bg-primary bg-opacity-15 py-14 pl-6 pr-4 pb-8 sweet-shad ${card_class}`}>
                <div className={`absolute top-[-32px] bg-white p-3 text-[42px] text-primary rounded-md duration-500 ${box_class} sweet-shad border ${animation === id ? 'scale-105 rotate-45 duration-500' : ''}`}>
                    <Image src={icon ? icon : defaultIcon} height={40} width={40} alt={title} className={animation === id ? 'rotate-[-45deg] duration-500' : 'duration-500'}></Image>
                </div>
                <div className="flex justify-between items-start">
                    <div className="">
                        <h2 className='text-[18px] md:text-[20px] font-semibold'>{title}</h2>
                        <div className={`divider ${divider_class} w-[100px]`}></div>
                    </div>
                    <h1 className='font-bold text-[52px] strock-number'>{serial}</h1>
                </div>
                <p>{short_description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
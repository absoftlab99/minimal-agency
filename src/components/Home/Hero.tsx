import React from 'react';
import { TbWorld } from 'react-icons/tb';
import heroImage from '../../app/assets/hero.png';
import Image from 'next/image';
import Services from './Services';

const Hero = () => {
    return (
        <div className='grid lg:place-content-center bg-[#def2ff] w-full md:pt-12 pb-24'>
            <div className='w-full lg:w-[1200px] xl:w-[1320px] px-4 md:px-0 mx-auto'>
                <div className='grid grid-cols-12 py-12 gap-6 md:gap-14 w-full items-center'>
                    <div className="col-span-12 md:col-span-7 w-full">
                        <div className="flex">
                            <p className='bg-neutral rounded-full p-2 text-white flex gap-2 mb-2'>
                                ওই প্রো ডেভস 
                                <span className='custom-btn4 rounded-full px-2'>স্মার্ট সমাধান</span>
                            </p>
                        </div>
                        <h4 className='text-[24px] md:text-[42px] font-bold mt-4 mb-2 leading-tight'>
                            ডিজিটাল বাংলাদেশের<br />স্মার্ট সমাধান
                        </h4>
                        <p className='text-secondary text-[16px] md:text-[18px] mb-4'>
                            উন্নত মানের প্রযুক্তি সেবা প্রদান আমাদের প্রধান লক্ষ্য </p>
                        <div className="join flex flex-wrap md:flex-nowrap items-center bg-white p-3 w-full gap-3 mt-4 rounded-md shadow">
                            <div className='flex gap-3 justify-start items-center w-full md:w-2/3'>
                                <p className="join-item text-[24px] md:text-[28px] text-primary"><TbWorld /></p>
                                <input type="text" placeholder="example.com" className="input join-item w-full bg-white focus:outline-none focus:ring-0 focus:ring-offset-0 border-none"/>
                            </div>
                            <div className='join-item flex justify-end w-full md:w-1/3'>
                                <button type='button'className='btn new-bg w-full md:w-auto md:px-14 text-sm'>
                                    ডোমেইন অনুসন্ধান
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5 w-full hidden md:flex">
                        <Image 
                            src={heroImage} 
                            width={525} 
                            height={445} 
                            alt='hero image' 
                            className="mx-auto md:mx-0"
                        />
                    </div>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Hero;

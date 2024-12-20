import React from 'react';
import devImg from '../../../app/assets/app-development.svg';
import Image from 'next/image';

const MobileHero = () => {
    return (
        <div className='grid place-content-center py-10 md:py-20 web-bg min-h-[90vh]'>
            <div className="w-full lg:w-[1200px] xl:w-[1320px] px-4 md:px-0 mx-auto">
                <div className="grid grid-cols-12 justify-between items-center w-full">
                    <div className="col-span-12 md:col-span-6 w-full">
                        <div className="flex">
                            <p className='bg-neutral rounded-full p-2 text-white flex gap-2 mb-2'>
                                ওই প্রো ডেভস
                                <span className='bg-primary rounded-full px-2'>স্মার্ট সমাধান</span>
                            </p>
                        </div>
                        <h4 className='text-[24px] md:text-[42px] font-bold mt-6 mb-2 leading-tight'>
                            প্রতিষ্ঠান বা ব্যাক্তিগত<br />মোবাইল এ্যাপস্
                        </h4>
                        <div className="flex flex-wrap gap-3 items-center mt-6 w-full">
                            <div className='btn custom-btn1 btn-block md:btn-wide '>ভিডিও বিজ্ঞাপন</div>
                            <button className='btn custom-btn2 btn-block md:btn-wide' type="button">ভিডিও ডকুমেন্টারি</button>
                        </div>
                        <div className="flex flex-wrap gap-3 items-center mt-3">
                            <button className='btn custom-btn3 btn-block md:btn-wide' type="button">ভিডিও প্রতিবেদন</button>
                            <button className='btn custom-btn4 btn-block md:btn-wide' type="button">অনুষ্ঠান কাভারেজ</button>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <figure className='flex justify-end'>
                            <Image src={devImg} alt='hero image web development' height={450} width={500}></Image>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MobileHero;
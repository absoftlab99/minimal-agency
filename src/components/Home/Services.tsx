import React from 'react';
import { TbAppsFilled, TbAppWindowFilled, TbBrandMeta, TbMovie, TbVectorBezier, TbWorldUpload } from 'react-icons/tb';

const Services = () => {
    return (
        <div className='grid grid-cols-12 gap-4 md:gap-6 px-4 md:px-0'>
            <div className="col-span-6 md:col-span-4 lg:col-span-2">
                <div className="custom-btn1 flex flex-col items-center py-6 px-4 rounded-lg cursor-pointer sweet-shad hover:scale-105 duration-500">
                    <div className='bg-white p-4 rounded-full bg-opacity-25 text-white text-[42px]'><TbAppWindowFilled></TbAppWindowFilled></div>
                    <p className='text-[16px] md:text-[18px] font-semibold text-white mt-2'>ওয়েব ডেভেলপমেন্ট</p>
                </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-2">
                <div className="custom-btn2 flex flex-col items-center py-6 px-4 rounded-lg cursor-pointer sweet-shad hover:scale-105 duration-500">
                    <div className='bg-white p-4 rounded-full bg-opacity-25 text-white text-[42px]'><TbAppsFilled></TbAppsFilled></div>
                    <p className='text-[16px] md:text-[18px] font-semibold text-white mt-2'>এ্যাপ ডেভেলপমেন্ট</p>
                </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-2">
                <div className="custom-btn4 flex flex-col items-center py-6 px-4 rounded-lg cursor-pointer sweet-shad hover:scale-105 duration-500">
                    <div className='bg-white p-4 rounded-full bg-opacity-25 text-white text-[42px]'><TbBrandMeta></TbBrandMeta></div>
                    <p className='text-[16px] md:text-[18px] font-semibold text-white mt-2'>ডিজিটাল মার্কেটিং</p>
                </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-2">
                <div className="custom-btn3 flex flex-col items-center py-6 px-4 rounded-lg cursor-pointer sweet-shad hover:scale-105 duration-500">
                    <div className='bg-white p-4 rounded-full bg-opacity-25 text-white text-[42px]'><TbVectorBezier></TbVectorBezier></div>
                    <p className='text-[16px] md:text-[18px] font-semibold text-white mt-2'>গ্রাফিক্স ডিজাইন</p>
                </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-2">
                <div className="custom-btn1 flex flex-col items-center py-6 px-4 rounded-lg cursor-pointer sweet-shad hover:scale-105 duration-500">
                    <div className='bg-white p-4 rounded-full bg-opacity-25 text-white text-[42px]'><TbMovie></TbMovie></div>
                    <p className='text-[16px] md:text-[18px] font-semibold text-white mt-2'>ভিডিও প্রডাকশন</p>
                </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-2">
                <div className="custom-btn2 flex flex-col items-center py-6 px-4 rounded-lg cursor-pointer sweet-shad hover:scale-105 duration-500">
                    <div className='bg-white p-4 rounded-full bg-opacity-25 text-white text-[42px]'><TbWorldUpload></TbWorldUpload></div>
                    <p className='text-[16px] md:text-[18px] font-semibold text-white mt-2'>ডোমেইন হোস্টিং</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
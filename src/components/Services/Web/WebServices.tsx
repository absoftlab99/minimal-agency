'use client'
import React, { useState } from 'react';
import { TbBuilding, TbShoppingCartCode } from 'react-icons/tb';

const WebServices = () => {
    const [animation, setAnimation] = useState(0);
    return (
        <div className='grid place-content-center py-10 md:py-20'>
            <div className="w-full lg:w-[1200px] xl:w-[1320px] px-4 md:px-0 mx-auto">
                <div className="grid grid-cols-12 justify-between items-center w-full gap-8 md:gap-4">
                    <div className="col-span-12 md:col-span-3">
                        <div onMouseEnter={()=>setAnimation(1)} onMouseLeave={()=>setAnimation(0)} className="relative rounded-md bg-primary bg-opacity-15 py-14 pl-6 pr-4 pb-8 sweet-shad custom-btn1">
                            <div className={`absolute top-[-32px] bg-white p-3 text-[42px] text-primary rounded-md duration-500 custom-btn4 sweet-shad border ${animation === 1 ? 'scale-105 rotate-45 duration-500': ''}`}>
                                <TbBuilding className={animation === 1 ? 'rotate-[-45deg] duration-500': 'duration-500'}></TbBuilding>
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="">
                                    <h2 className='text-[18px] md:text-[20px] font-semibold'>কর্পোরেট ওয়েবসাইট</h2>
                                    <div className="divider divider-warning w-[100px]"></div>
                                </div>
                                <h1 className='font-bold text-[52px] strock-number'>০১</h1>
                            </div>
                            <p>কর্পোরেট প্রতিষ্ঠান, অর্গানাইজেশন, ব্যাঙ্ক-বিমা হাসপাতাল এর ওয়েবসাইট</p>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-3">
                        <div onMouseEnter={()=>setAnimation(2)} onMouseLeave={()=>setAnimation(0)} className="relative rounded-md bg-primary bg-opacity-15 py-14 pl-6 pr-4 pb-8 sweet-shad custom-btn2">
                            <div className={`absolute top-[-32px] bg-white p-3 text-[42px] text-primary rounded-md duration-500 custom-btn3 sweet-shad border ${animation === 2 ? 'scale-105 rotate-45 duration-500': ''}`}>
                                <TbShoppingCartCode className={animation === 2 ? 'rotate-[-45deg] duration-500': 'duration-500'}></TbShoppingCartCode>
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="">
                                    <h2 className='text-[18px] md:text-[20px] font-semibold'>ই-কমার্স ওয়েবসাইট</h2>
                                    <div className="divider w-[100px] divider-primary"></div>
                                </div>
                                <h1 className='font-bold text-[52px] strock-number'>০২</h1>
                            </div>
                            <p>দোকান বা অনলাইন শপ এর মাধ্যমে সারা দেশে পন্য বেচাকেনার ওয়েবসাইট</p>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-3">
                        <div onMouseEnter={()=>setAnimation(3)} onMouseLeave={()=>setAnimation(0)} className="relative rounded-md bg-primary bg-opacity-15 py-14 pl-6 pr-4 pb-8 sweet-shad custom-btn1">
                            <div className={`absolute top-[-32px] bg-white p-3 text-[42px] text-primary rounded-md duration-500 custom-btn1 sweet-shad border ${animation === 3 ? 'scale-105 rotate-45 duration-500': ''}`}>
                                <TbBuilding className={animation === 3 ? 'rotate-[-45deg] duration-500': 'duration-500'}></TbBuilding>
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="">
                                    <h2 className='text-[18px] md:text-[20px] font-semibold'>নিউজপোর্টাল ওয়েবসাইট</h2>
                                    <div className="divider w-[100px] divider-warning"></div>
                                </div>
                                <h1 className='font-bold text-[52px] strock-number'>০৩</h1>
                            </div>
                            <p>ব্লগ ও সাপ্তাহিক, দৈনিক, মাসিক পত্রিকা ও ম্যাগাজিন এর জন্য নিউজ পোর্টাল</p>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-3">
                        <div onMouseEnter={()=>setAnimation(4)} onMouseLeave={()=>setAnimation(0)} className="relative rounded-md bg-primary bg-opacity-15 py-14 pl-6 pr-4 pb-8 sweet-shad custom-btn3">
                            <div className={`absolute top-[-32px] bg-white p-3 text-[42px] text-primary rounded-md duration-500 custom-btn2 sweet-shad border ${animation === 4 ? 'scale-105 rotate-45 duration-500': ''}`}>
                                <TbBuilding className={animation === 4 ? 'rotate-[-45deg] duration-500': 'duration-500'}></TbBuilding>
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="">
                                    <h2 className='text-[18px] md:text-[20px] font-semibold'>প্রতিষ্ঠানের ওয়েবসাইট</h2>
                                    <div className="divider w-[100px] divider-primary"></div>
                                </div>
                                <h1 className='font-bold text-[52px] strock-number'>০৪</h1>
                            </div>
                            <p>স্কুল, কলেজ, মাদ্রাসা, কিন্টারগার্ডেন ও কোচিংসেন্টারের ওয়েবসাইট</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 justify-between items-center w-full gap-8 md:gap-4 mt-8 md:mt-12">
                    <div className="col-span-12 md:col-span-3">
                        <div onMouseEnter={()=>setAnimation(5)} onMouseLeave={()=>setAnimation(0)} className="relative rounded-md bg-primary bg-opacity-15 py-14 pl-6 pr-4 pb-8 sweet-shad custom-btn2">
                            <div className={`absolute top-[-32px] bg-white p-3 text-[42px] text-primary rounded-md duration-500 custom-btn3 sweet-shad border ${animation === 5 ? 'scale-105 rotate-45 duration-500': ''}`}>
                                <TbBuilding className={animation === 5 ? 'rotate-[-45deg] duration-500': 'duration-500'}></TbBuilding>
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="">
                                    <h2 className='text-[18px] md:text-[20px] font-semibold'>ই-পেপার সিস্টেম</h2>
                                    <div className="divider w-[100px] divider-primary"></div>
                                </div>
                                <h1 className='font-bold text-[52px] strock-number'>০৫</h1>
                            </div>
                            <p>প্রিন্ট পত্রিকা ও ট্যাবলেট এর জন্য ডায়নামিক পেপারকাটিং সিস্টেম</p>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-3">
                        <div onMouseEnter={()=>setAnimation(6)} onMouseLeave={()=>setAnimation(0)} className="relative rounded-md bg-primary bg-opacity-15 py-14 pl-6 pr-4 pb-8 sweet-shad custom-btn1">
                            <div className={`absolute top-[-32px] bg-white p-3 text-[42px] text-primary rounded-md duration-500 custom-btn4 sweet-shad border ${animation === 6 ? 'scale-105 rotate-45 duration-500': ''}`}>
                                <TbBuilding className={animation === 6 ? 'rotate-[-45deg] duration-500': 'duration-500'}></TbBuilding>
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="">
                                    <h2 className='text-[18px] md:text-[20px] font-semibold'>ই-ম্যাগাজিন সিস্টেমং</h2>
                                    <div className="divider w-[100px] divider-warning"></div>
                                </div>
                                <h1 className='font-bold text-[52px] strock-number'>০৬</h1>
                            </div>
                            <p>বিভিন্ন প্রিন্ট ম্যাগাজিন, বই এবং প্রকাশনির এর ডিজিটাল সংস্করণ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebServices;
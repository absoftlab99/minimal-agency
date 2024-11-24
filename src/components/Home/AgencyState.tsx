import React from 'react';
import l2r from '../../app/assets/l2r.png';
import r2l from '../../app/assets/r2l.png';
import Image from 'next/image';

const AgencyState = () => {
    return (
        <div className='grid lg:place-content-center bg-[#eff4fc] w-full md:pt-12 pb-24'>
            <div className='w-full lg:w-[1200px] xl:w-[1320px] px-4 md:px-0 mx-auto'>
                <div className="">
                    <div className="flex gap-2 items-center justify-center">
                        <Image src={l2r} width={26} height={7} alt='left to right chevern' />
                        <p className='text-[16px] md:text-[18px]'>আমাদের অর্জন</p>
                        <Image src={r2l} width={26} height={7} alt='right to left chevern' />
                    </div>
                    <h2 className='text-[24px] md:text-[30px] font-bold text-center mt-2'>পাঁচ বছরে আমাদের অর্জন</h2>
                </div>

                <div className="join join-vertica md:join-horizontal grid grid-cols-12 mt-4">
                    <div className="join-item bg-black glass p-4 col-span-12 md:col-span-3 flex flex-col items-center md:items-start">
                        <h1 className='text-[45px] text-white font-bold'>৭১+</h1>
                        <p className='text-white mt-2'>ওয়েব ডেভেলপমেন্ট<br></br>
                        এর নিয়মিত গ্রাহক</p>
                    </div>
                    <div className="join-item bg-black glass p-4 col-span-12 md:col-span-3 flex flex-col items-center md:items-start">
                        <h1 className='text-[45px] text-white font-bold'>৯৬+</h1>
                        <p className='text-white mt-2'>ওয়ার্ডেপ্রেস থিম<br></br>
                        বিক্রয় হয়েছে</p>
                    </div>
                    <div className="join-item bg-black glass p-4 col-span-12 md:col-span-3 flex flex-col items-center md:items-start">
                        <h1 className='text-[45px] text-white font-bold'>৫৮</h1>
                        <p className='text-white mt-2'>ভিডিও ও ডকুমেন্টারি<br></br>
                        সরবরাহ করেছি আমরা</p>
                    </div>
                    <div className="join-item bg-primary glass p-4 col-span-12 md:col-span-3 flex flex-col items-center md:items-start">
                        <h1 className='text-[45px] text-white font-bold'>৪৮০+</h1>
                        <p className='text-white mt-2'>গ্রাহক নিয়মিত আমাদের<br></br>
                        সরবরাহ করেছি আমরা</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgencyState;
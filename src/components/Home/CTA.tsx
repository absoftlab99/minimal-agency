import React from 'react';

const CTA = () => {
    return (
        <div className='grid lg:place-content-center bg-primary w-full py-8 md:py-12'>
            <div className='w-full lg:w-[1200px] xl:w-[1320px] px-4 md:px-0 mx-auto'>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-white">
                        <h3 className='text-2xl font-bold text-center md:text-start'>আমাদের সাথে কাজ করতে চান ?</h3>
                        <p className='text-center md:text-start mt-1'>আমাদের সেবা অথবা যে কোন বিষয়ে জানতে যোগাযোগ করুন আমাদের সাথে</p>
                    </div>
                    <button type="button" className='btn bg-white mt-4 md:mt-0'>যোগযোগ করুন</button>
                </div>
            </div>
        </div>
    );
};

export default CTA;
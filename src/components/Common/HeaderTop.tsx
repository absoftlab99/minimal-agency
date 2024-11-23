import React from 'react';
import { TbMessage2, TbPhoneCall, TbRosetteDiscountCheckFilled } from 'react-icons/tb';

const HeaderTop = () => {
    return (
        <div className='grid md:place-content-center bg-primary h-8'>
            <div className='lg:w-[1200px] xl:w-[1440px]'>
                <div className="flex justify-between text-white">
                    <div className="flex gap-4">
                        <div className="flex gap-2 items-center">
                            <TbMessage2></TbMessage2>
                            <p>Live Chat</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <TbRosetteDiscountCheckFilled></TbRosetteDiscountCheckFilled>
                            <p>Offers</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <TbPhoneCall></TbPhoneCall>
                        <p>Call Now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
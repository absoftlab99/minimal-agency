import React from 'react';
import photo from '../../app/assets/Techtaranga-Epaper-Script.png'
import Image from 'next/image';
import { TbEyeFilled } from 'react-icons/tb';
import { FaDownload, FaCartPlus } from 'react-icons/fa6';

const PortfolioCard = () => {
    return (
        <div className=''>
            <div className="card bg-white sweet-shad rounded-md">
                <figure className="p-2">
                    <Image src={photo} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="Shoes" />
                </figure>
                <div className="card-body p-4 pb-2 pt-0">
                    <h2 className="card-title text-[16px]">Dynamic Epaper - Epaper PHP Script For Printed Newspaer</h2>
                    <div className="flex justify-between items-center">
                        <p className='text-[18px] md:text-[22px] text-accent font-semibold'><span>৳</span> ১১০০০</p>
                        <div className="flex items-center">
                            <p className='bg-accent bg-opacity-15 p-3 text-accent rounded-full'><FaCartPlus /></p>
                        </div>
                    </div>
                </div>
                <div className="px-2 pb-2 flex justify-between items-center border-t pt-2">
                    <button className="btn btn-error text-white"><TbEyeFilled></TbEyeFilled> View Demo</button>
                    <div className="flex gap-2 items-center">
                        <p className='bg-secondary bg-opacity-15 p-2 text-secondary rounded-full'><FaDownload></FaDownload></p>
                        <p className='text-secondary'>18 <span>SOLD</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
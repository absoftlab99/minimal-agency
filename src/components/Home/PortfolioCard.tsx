import React from 'react';
import Image from 'next/image';
import { TbEyeFilled } from 'react-icons/tb';
import { FaDownload, FaCartPlus } from 'react-icons/fa6';
import Link from 'next/link';

interface PortfolioProps {
    title: string;
    thumbnail: string;
    price: string;
    soldCount: string;
    viewUrl: string;
}

const PortfolioCard: React.FC<PortfolioProps> = ({ title, thumbnail, price, soldCount, viewUrl }) => {
    return (
        <div>
            <div className="card bg-white sweet-shad rounded-md">
                <figure className="p-2">
                    <Image
                        src={thumbnail || '/default-thumbnail.png'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt={title}
                    />
                </figure>
                <div className="card-body p-4 pb-2 pt-0">
                    <h2 className="card-title text-[16px]">{title}</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-[18px] md:text-[22px] text-accent font-semibold">
                            <span>৳</span> {price}
                        </p>
                        <div className="flex items-center">
                            <p className="bg-accent bg-opacity-15 p-3 text-accent rounded-full">
                                <FaCartPlus />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-2 pb-2 flex justify-between items-center border-t pt-2">
                    <Link target='_blank' href={`${viewUrl}`} className="btn btn-error text-white">
                        <TbEyeFilled /> View Demo
                    </Link>
                    <div className="flex gap-2 items-center">
                        <p className="bg-secondary bg-opacity-15 p-2 text-secondary rounded-full">
                            <FaDownload />
                        </p>
                        <p className="text-secondary">
                            {soldCount} <span>SOLD</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;

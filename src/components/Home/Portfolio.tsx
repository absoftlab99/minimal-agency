import React from 'react';
import PortfolioCard from './PortfolioCard';
import Image from 'next/image';
import l2r from '../../app/assets/l2r.png';
import r2l from '../../app/assets/r2l.png';

interface PortfolioItem {
    id: number;
    thumbnail: string;
    title: string;
    price: string;
    sold_count: string;
    view_url: string;
}

interface Props {
    portfolios: PortfolioItem[];
}

const Portfolio: React.FC<Props> = ({ portfolios }) => {
    return (
        <div className='grid lg:place-content-center w-full bg-[#f7f9fc] custom-bg py-20'>
            <div className='w-full lg:w-[1200px] xl:w-[1320px] px-4 md:px-0 mx-auto'>
                <div className="grid grid-cols-12 gap-2 md:gap-5 items-center">
                    <div className='col-span-12 md:col-span-6'>
                        <div className="flex gap-2 items-center justify-center md:justify-start">
                            <Image src={l2r} width={26} height={7} alt='left to right chevern' />
                            <p className='text-[16px] md:text-[18px]'>টেকতরঙ্গ কাস্টম সিএমএস </p>
                            <Image src={r2l} width={26} height={7} alt='right to left chevern' />
                        </div>
                        <h2 className='text-[24px] md:text-[30px] font-bold text-center md:text-start mt-2'>আমাদের জনপ্রিয় পিএইচপি স্ক্রিপ্ট</h2>
                    </div>
                    <div className='col-span-12 md:col-span-6'>
                        <p className='text-[16px] md:text-[18px] text-center md:text-start'>আপনার প্রতিষ্ঠানের সকল সমস্যার সমাধানে আমরা উই প্রো ডেভস্ টিম তৈরি করছি পিএইচপি ওয়েব অ্যাপ ও ওয়েবসাইট সিএমএস।</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5 mt-5">
                    {portfolios.map((portfolio) => (
                        <div className='col-span-12 md:col-span-4 lg:col-span-3' key={portfolio.id}>
                            <PortfolioCard
                                title={portfolio.title}
                                thumbnail={portfolio.thumbnail}
                                price={portfolio.price}
                                soldCount={portfolio.sold_count}
                                viewUrl={portfolio.view_url}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

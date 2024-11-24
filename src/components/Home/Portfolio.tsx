'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import l2r from '../../app/assets/l2r.png';
import r2l from '../../app/assets/r2l.png';
import PortfolioCard from './PortfolioCard';
import { GetStaticProps, NextPage } from 'next';

interface Portfolio {
    id: number;
    thumbnail: string;
    title: string;
    price: string;
    sold_count: string;
}
interface Props {
    portfolios: Portfolio[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await fetch('/cms.json');
    const portfolios: Portfolio[] = await res.json();

    return {
        props: {
            portfolios,
        },
    };
};

const Portfolio: NextPage<Props> = ({ portfolios }) => {

    return (
        <div className='grid lg:place-content-center w-full bg-[#f7f9fc] custom-bg py-20'>
            <div className="w-full max-w-[1320px] px-4 md:px-0 mx-auto">
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
                        <p className='text-[16px] md:text-[18px] text-center md:text-start'>আপনার প্রতিষ্ঠানের সকল সমস্যার সমাধানে আমরা টেকতরঙ্গ টি তৈরি করছি পিএইচপি ওয়েব অ্যাপ ও ওয়েবসাইট সিএমএস।</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5 mt-5">
                    <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <PortfolioCard portfolios={portfolios}></PortfolioCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
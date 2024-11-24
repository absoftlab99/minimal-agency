import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../app/assets/white_logo.png';
import { TbBrandFacebook, TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbBrandX, TbHeadphones, TbLocation, TbMail } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='grid lg:place-content-center w-full bg-[#12171b] custom-bg py-20'>
            <div className='w-full lg:w-[1200px] xl:w-[1320px] px-4 md:px-0 mx-auto'>
                <div className="grid grid-cols-12 gap-8 md:gap-20">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-start w-full">
                        <Link href='/'>
                            <figure>
                                <Image src={logo} width={230} height={100} alt='logo image'></Image>
                            </figure>
                        </Link>
                        <p className='text-white'>ডিজিটাল বাংলাদেশের ডিজিটাল ও স্মার্ট প্রযুক্তি সেবা নিয়ে<br></br> উই প্রো ডেভস্ আছে আপনার পাশে।</p>
                        <div className="flex gap-3 mt-4">
                            <div className="bg-primary p-1 rounded text-white text-[24px]"><TbBrandFacebook></TbBrandFacebook></div>
                            <div className="bg-primary p-1 rounded text-white text-[24px]"><TbBrandInstagram></TbBrandInstagram></div>
                            <div className="bg-primary p-1 rounded text-white text-[24px]"><TbBrandX></TbBrandX></div>
                            <div className="bg-primary p-1 rounded text-white text-[24px]"><TbBrandLinkedin></TbBrandLinkedin></div>
                            <div className="bg-primary p-1 rounded text-white text-[24px]"><TbBrandGithub></TbBrandGithub></div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-2">
                        <h4 className='font-bold text-white'>গুরুত্বপূর্ন লিঙ্ক</h4>
                        <ul className='text-white mt-2'>
                            <li className='my-2'><Link href='/'>About Us</Link></li>
                            <li className='my-2'><Link href='/'>Contact Us</Link></li>
                            <li className='my-2'><Link href='/'>Facebook Page</Link></li>
                            <li className='my-2'><Link href='/'>Earn With Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-2">
                        <h4 className='font-bold text-white'>আমাদের সেবা</h4>
                        <ul className='text-white mt-2'>
                            <li className='my-2'><Link href='/'>ওয়েব ডেভেলপমেন্ট</Link></li>
                            <li className='my-2'><Link href='/'>গ্রাফিক্স ডিজাইন</Link></li>
                            <li className='my-2'><Link href='/'>ভিডিও প্রডাকশন</Link></li>
                            <li className='my-2'><Link href='/'>এ্যাপ ডেভেলপমেন্ট</Link></li>
                            <li className='my-2'><Link href='/'>ডিজিটাল মার্কেটিং</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <h4 className='font-bold text-white mb-2'>যোগাযোগ করুণ</h4>
                        <div className="flex gap-3 items-center text-white my-2">
                            <TbLocation></TbLocation>
                            <p>দক্ষিণ কমলাপুর, মতিঝিল, ঢাকা, বাংলাদেশ ।</p>
                        </div>
                        <div className="flex gap-3 items-center text-white my-2">
                            <TbHeadphones></TbHeadphones>
                            <Link className='text-white' href='tel:+8801798930232'>+880 1798-930232</Link>
                        </div>
                        <div className="flex gap-3 items-center text-white my-2">
                            <TbHeadphones></TbHeadphones>
                            <Link className='text-white' href='tel:+8801309054202'>+880 1309-054202</Link>
                        </div>
                        <div className="flex gap-3 items-center text-white my-2">
                            <TbMail></TbMail>
                            <Link className='text-white' href='mailto:admin@absoftlab.com'>admin@absoftlab.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
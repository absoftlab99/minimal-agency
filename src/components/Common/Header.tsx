import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../app/assets/logo.png';
import { TbBox, TbAppWindow, TbChevronDown, TbHome, TbLayoutGrid, TbLogout, TbMenu2, TbX, TbBrandMeta, TbVectorBezier, TbMovie, TbCode, TbServerCog, TbServer, TbLink, TbAddressBook } from 'react-icons/tb';

const Header = () => {
    return (
        <div className='grid md:place-content-center bg-white'>
            <div className="lg:w-[1200px] xl:w-[1320px]">
                <div className="navbar px-0 py-4">
                    <div className="navbar-start lg:gap-6">
                        <Link href='/' className="flex items-center gap-3">
                            <figure className='ms-4 md:ms-0'>
                                <Image src={logo} width={230} height={100} alt='logo image'></Image>
                            </figure>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[18px]">
                            <li><Link href='/'><TbHome></TbHome> Home</Link></li>
                            <li className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="text-[18px]"> <TbLayoutGrid></TbLayoutGrid> Services <TbChevronDown></TbChevronDown></div>
                                <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 sweet-shad ms-0 glass">
                                    <li><Link className='hover:ps-7 transition-all duration-500 hover:text-primary' href='/web-development'><TbAppWindow></TbAppWindow> Web Development</Link></li>
                                    <li><Link className='hover:ps-7 transition-all duration-500 hover:text-primary' href='/app-development'><TbBox></TbBox> App Development</Link></li>
                                    <li><Link className='hover:ps-7 transition-all duration-500 hover:text-primary' href='/digital-marketing'><TbBrandMeta></TbBrandMeta> Digital Marketing</Link></li>
                                    <li><Link className='hover:ps-7 transition-all duration-500 hover:text-primary' href='/graphics-design'><TbVectorBezier></TbVectorBezier> Graphics Design</Link></li>
                                    <li><Link className='hover:ps-7 transition-all duration-500 hover:text-primary' href='/video-production'><TbMovie></TbMovie> Video Production</Link></li>
                                </ul>
                            </li>
                            <li><Link href='/products'><TbCode></TbCode> Products</Link></li>
                            <li className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="text-[18px]"><TbServerCog></TbServerCog> Domain & Hosting <TbChevronDown></TbChevronDown></div>
                                <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 sweet-shad ms-0 glass">
                                    <li><Link href='/hosting' className='hover:ps-7 transition-all duration-500 hover:text-primary'><TbServer></TbServer> Web Hosting</Link></li>
                                    <li><Link href='/domain' className='hover:ps-7 transition-all duration-500 hover:text-primary'><TbLink></TbLink> Search Domain</Link></li>
                                </ul>
                            </li>
                            <li><Link href='/contact-us'><TbAddressBook></TbAddressBook> Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end flex justify-end">
                        <Link href='/products' className="btn custom-btn2 hidden lg:flex text-white"><TbLogout></TbLogout> Our Product</Link>
                        <label htmlFor="my-drawer" className='btn btn-ghost lg:hidden text-[28px]'><TbMenu2></TbMenu2></label>
                    </div>
                </div>
            </div>

            {/* Drawer content setcion */}
            <div className="drawer lg:hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <div className="flex justify-between items-center">
                            <Link href='/products' type="button" className='btn btn-sm btn-primary text-white'>Our Products</Link>
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="btn btn-sm btn-ghost text-[28px]"><TbX></TbX></label>
                        </div>
                        <div className="divider my-0"></div>
                        <li><Link href='/'><TbHome></TbHome> Home</Link></li>
                        <li>
                            <details open>
                                <summary>
                                    <TbLayoutGrid></TbLayoutGrid> Services
                                </summary>
                                <ul>
                                    <li><Link href='/web-development'><TbAppWindow></TbAppWindow> Web Development</Link></li>
                                    <li><Link href='/app-development'><TbBox></TbBox> App Development</Link></li>
                                    <li><Link href='/digital-marketing'><TbBrandMeta></TbBrandMeta> Digital Marketing</Link></li>
                                    <li><Link href='/graphics-design'><TbVectorBezier></TbVectorBezier> Graphics Design</Link></li>
                                    <li><Link href='/video-production'><TbMovie></TbMovie> Video Production</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link href='/products'><TbCode></TbCode> Products</Link></li>
                        <li>
                            <details open>
                                <summary>
                                    <TbServerCog></TbServerCog> Domain & Hosting
                                </summary>
                                <ul>
                                    <li><Link href='/hosting'><TbServer></TbServer> Web Hosting</Link></li>
                                    <li><Link href='/domain'><TbLink></TbLink> Search Domain</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link href='/contact-us'><TbAddressBook></TbAddressBook> Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
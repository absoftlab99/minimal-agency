import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbMail } from 'react-icons/tb';

interface TeamMemberProps {
    name: string;
    designation: string;
    photo: string;
    facebook: string;
    instagram: string;
    linkedin: string;
    email: string;
}

const TeamCard: React.FC<TeamMemberProps> = ({ name, designation, photo, facebook, instagram, linkedin, email }) => {
    return (
        <div className='card bg-white overflow-hidden sweet-shad hover:scale-105 duration-500'>
            <figure className='p-5'>
                <Image
                    className='rounded-full border-4 border-spacing-4'
                    src={photo}
                    width={200}
                    height={200}
                    alt={name}
                />
            </figure>
            <div className="card-body">
                <h1 className='text-center font-bold text-[18px] md:text-[22px]'>{name}</h1>
                <p className='text-center text-[14px] md:text-[16px]'>{designation}</p>
            </div>
            <div className="flex justify-center items-center bg-success gap-2 py-2">
                <Link className='text-[24px] text-white text-opacity-75' href={facebook}><TbBrandFacebook></TbBrandFacebook></Link>
                <Link className='text-[24px] text-white text-opacity-75' href={instagram}><TbBrandInstagram></TbBrandInstagram></Link>
                <Link className='text-[24px] text-white text-opacity-75' href={linkedin}><TbBrandLinkedin></TbBrandLinkedin></Link>
                <Link className='text-[24px] text-white text-opacity-75' href={`mailto:${email}`}><TbMail></TbMail></Link>
            </div>
        </div>
    );
};

export default TeamCard;
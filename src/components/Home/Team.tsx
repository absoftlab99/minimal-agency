import React from 'react';
import TeamCard from './TeamCard';
import l2r from '../../app/assets/l2r.png';
import r2l from '../../app/assets/r2l.png';
import Image from 'next/image';

interface TeamMember {
    id: number;
    name: string;
    designation: string;
    photo: string;
    facebook: string;
    instagram: string;
    linkedin: string;
    email: string;
}

interface Props {
    teamMembers: TeamMember[];
}

const Team: React.FC<Props> = ({ teamMembers }) => {
    return (
        <div className='grid lg:place-content-center w-full bg-[#f7f9fc] custom-bg py-20'>
            <div className='w-full lg:w-[1200px] xl:w-[1320px] px-4 md:px-0 mx-auto'>
                <div className="">
                    <div className="flex gap-2 items-center justify-center">
                        <Image src={l2r} width={26} height={7} alt='left to right chevern' />
                        <p className='text-[16px] md:text-[18px]'>আমাদের টিম</p>
                        <Image src={r2l} width={26} height={7} alt='right to left chevern' />
                    </div>
                    <h2 className='text-[24px] md:text-[30px] font-bold text-center mt-2'>আপনাদের সেবায় আমাদের পরিবার</h2>
                </div>
                <div className="grid grid-cols-12 gap-5 mt-4 md:mt-8">
                    {teamMembers.map((teamMember) => (
                        <div className='col-span-12 md:col-span-4 lg:col-span-3' key={teamMember.id}>
                            <TeamCard
                                name={teamMember.name}
                                designation={teamMember.designation}
                                photo={teamMember.photo}
                                facebook={teamMember.facebook}
                                instagram={teamMember.instagram}
                                linkedin={teamMember.linkedin}
                                email={teamMember.email}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
import React from 'react';
import TeamCard from './TeamCard';

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
            <div className="grid grid-cols-12 gap-5 mt-5">
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
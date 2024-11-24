'use client'
import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import AgencyState from './AgencyState';
import Team from './Team';

interface PortfolioItem {
    id: number;
    thumbnail: string;
    title: string;
    price: string;
    sold_count: string;
    view_url: string;
}

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

const HomeMain = () => {
    const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);


    useEffect(() => {
        const fetchPortfolios = async () => {
            const res = await fetch('/cms.json');
            const data = await res.json();
            setPortfolios(data);
        };
        fetchPortfolios();
    }, []);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            const res = await fetch('/team.json');
            const data = await res.json();
            setTeamMembers(data);
        }
        fetchTeamMembers();
    }, []);

    return (
        <div className="w-full">
            <Hero />
            <Portfolio portfolios={portfolios} />
            <AgencyState></AgencyState>
            <Team teamMembers={teamMembers}></Team>
        </div>
    );
};

export default HomeMain;

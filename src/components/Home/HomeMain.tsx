'use client'
import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import AgencyState from './AgencyState';
import Team from './Team';
import Clients from './Clients';
import CTA from './CTA';

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

interface ClientSlide {
    id: number;
    client_logo: string;
    client_name: string;
    client_url: string;
}

const HomeMain = () => {
    const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [clients, setClients] = useState<ClientSlide[]>([]);


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

    useEffect(() => {
        const fetchClients = async () => {
            const res = await fetch('/client.json');
            const data = await res.json();
            setClients(data);
        }
        fetchClients();
    }, []);


    return (
        <div className="w-full">
            <Hero />
            <Portfolio portfolios={portfolios} />
            <AgencyState></AgencyState>
            <Team teamMembers={teamMembers}></Team>
            <Clients clients={clients}></Clients>
            <CTA></CTA>
        </div>
    );
};

export default HomeMain;

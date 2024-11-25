'use client'
import React, { useEffect, useState } from 'react';
import Portfolio from '../Home/Portfolio';


interface PortfolioItem {
    id: number;
    thumbnail: string;
    title: string;
    price: string;
    sold_count: string;
    view_url: string;
}

const ProductsMain = () => {
    const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);

    useEffect(() => {
        const fetchPortfolios = async () => {
            const res = await fetch('/cms.json');
            const data = await res.json();
            setPortfolios(data);
        };
        fetchPortfolios();
    }, []);
    return (
        <div>
            <Portfolio portfolios={portfolios} />
        </div>
    );
};

export default ProductsMain;
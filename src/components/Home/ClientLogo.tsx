import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ClientProps {
    client_logo: string;
    client_name: string;
    client_url: string;
}

const ClientLogo: React.FC<ClientProps> = ({ client_logo, client_name, client_url }) => {
    return (
            <div className='bg-base-100 p-2 rounded-md'>
                <Link href={client_url}>
                    <Image
                        className='rounded'
                        src={client_logo}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt={client_name}
                    />
                </Link>
            </div>
    );
};

export default ClientLogo;
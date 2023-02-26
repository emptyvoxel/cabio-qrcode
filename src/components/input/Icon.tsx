import React from 'react';
import Pattern from '../../assets/patterns.svg';

const Icon: React.FC<{
    children: string;
    size?: number;
    fill?: string;
}> = ({ children, size=30, fill='#000000' }) => {
    return (
        <svg width={size} height={size} fill={fill}>
            <defs>
                <linearGradient id="linear-gradient">
                    <stop offset="0%" stopColor="#0cebeb" />
                    <stop offset="100%" stopColor="#29ffc6" />
                </linearGradient>
            </defs>
            <use xlinkHref={`${Pattern}#${children}`} />
        </svg>
    );
}

export default Icon;

import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Switch: React.FC<{
    className?: string;
    children: string;
    active?: boolean;
    onClick (): any;
}> = ({ className, children, active=false, onClick }) => {
    return (
        <div className={className}>
            <div className={`switch ${active ? 'active' : ''}`} onClick={onClick}>
                <motion.div
                    layout
                    transition={{duration: .3, type: 'spring'}}
                    className="handle"
                />
            </div>
            <span>{children}</span>
        </div>
    );
}

export default styled(Switch)`
    display: flex;
    align-items: center;
    margin: 5px 0;

    span {
        margin: 0 10px;
    }

    .switch {
        cursor: pointer;
        width: 2.7rem;
        height: 1.4rem;
        background: linear-gradient(to right, #0cebeb, #29ffc6);
        border-radius: 2rem;
        display: flex;
        align-items: center;

        &.active {
            justify-content: flex-end;
        }

        &:not(.active) {
            justify-content: flex-start;
        }

        .handle {
            height: 1rem;
            width: 1rem;
            border-radius: 50%;
            background-color: #fffd;
            margin: 0 .2rem;
        }
    }
`;

import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Switch: React.FC<{
    className?: string;
    children: string;
}> = ({ className, children }) => {
    return (
        <div className={className}>
            <input type="checkbox"/>
            <span>{children}</span>
        </div>
    );
}

export default styled(Switch)``;

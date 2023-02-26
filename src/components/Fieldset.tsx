import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Fieldset: React.FC<{
    className?: string;
    children: JSX.Element[] | JSX.Element;
}> = ({ className, children }) => {
    return (
        <motion.fieldset
          className={className}
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          exit={{ x: -500 }}
          transition={{ duration: .5 }}>
            {children}
        </motion.fieldset>
    );
}

export default styled(Fieldset)`
    position: absolute;
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

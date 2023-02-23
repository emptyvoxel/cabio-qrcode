import React from 'react';
import styled from '@emotion/styled';

const Select: React.FC<{
    className?: string;
    options: string[];
}> = ({ className, options }) => {
    return (
        <select className={className}>
            {options.map(item => (
                <option value={item}>{item.toUpperCase()}</option>
            ))}
        </select>
    );
}

export default styled(Select)``;

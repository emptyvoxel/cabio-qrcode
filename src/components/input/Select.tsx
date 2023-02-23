import React from 'react';
import styled from '@emotion/styled';

const Select: React.FC<{
    className?: string;
    options: string[];
    onChange (event: React.ChangeEvent<HTMLSelectElement>): any;
}> = ({ className, options, onChange }) => {
    return (
        <select className={className} onChange={onChange}>
            {options.map(item => (
                <option value={item} key={item}>{item.toUpperCase()}</option>
            ))}
        </select>
    );
}

export default styled(Select)``;

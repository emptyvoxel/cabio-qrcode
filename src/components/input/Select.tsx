import React from 'react';
import styled from '@emotion/styled';

const Select: React.FC<{
    className?: string;
    options: string[];
}> = ({ className, options }) => {
    return (
        <div className={className}>
            {options}
        </div>
    );
}

export default styled(Select)``;

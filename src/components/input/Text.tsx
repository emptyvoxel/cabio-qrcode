import React from 'react';
import styled from '@emotion/styled';

const Text: React.FC<{
    className?: string;
    children?: string;
    value?: string;
    onChange (event: React.ChangeEvent<HTMLInputElement>): any;
}> = ({ className, children, onChange, value }) => {
    return (
        <div className={className}>
            <input value={value} onChange={onChange} type="text"/>
            <span>{children}</span>
        </div>
    );
}

export default styled(Text)``;

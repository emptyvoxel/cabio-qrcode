import React from 'react';
import styled from '@emotion/styled';
import Icon from './Icon';
import { Options } from 'qr-code-styling';

const Select: React.FC<{
    className?: string;
    opts: string[];
    dataKey: 'cornersSquareOptions' | 'cornersDotOptions' | 'dotsOptions';
    options: Options;
    setOptions: React.Dispatch<React.SetStateAction<Options>>;
}> = ({ className, opts, dataKey, options, setOptions }) => {
    const isActive = (opt: string) => options[dataKey]?.type === opt;
    const onClick = (opt: string) => {
        return setOptions({
            ...options,
            [dataKey]: {
                ...options[dataKey],
                type: opt
            }
        });
    }

    return (
        <div className={className}>
            {opts.map(opt => (
                <div
                    title={opt}
                    onClick={() => onClick(opt)} className={isActive(opt) ? 'active' : ''}>
                    <Icon>{`${dataKey}-${opt}`}</Icon>
                </div>
            ))}
        </div>
    );
}

export default styled(Select)`
    display: flex;
    align-items: center;

    > div {
        cursor: pointer;
        display: flex;
        margin: 0 5px;

        &.active svg {
            fill: #f0f;
        }
    }
`;

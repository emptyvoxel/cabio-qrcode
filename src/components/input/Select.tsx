import React from 'react';
import styled from '@emotion/styled';
import Icon from './Icon';
import { Options } from 'qr-code-styling';

const Select: React.FC<{
    className?: string;
    opts: string[];
    dataKey: 'cornersSquareOptions' | 'cornersDotOptions' | 'dotsOptions' | 'backgroundOptions';
    options: Options;
    setOptions: React.Dispatch<React.SetStateAction<Options>>;
}> = ({ className, opts, dataKey, options, setOptions }) => {
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
                <div onClick={() => onClick(opt)}>
                    <Icon>{`${dataKey}-${opt}`}</Icon>
                </div>
            ))}
        </div>
    );
}

export default styled(Select)`
    > div {
        display: inline-block;
    }
`;

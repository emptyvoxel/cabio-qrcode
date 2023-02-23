import styled from '@emotion/styled';
import { Options } from 'qr-code-styling';
import React from 'react';

const Color: React.FC<{
    className?: string;
    options: Options;
    setOptions: React.Dispatch<React.SetStateAction<Options>>;
    dataKey: 'cornersSquareOptions' | 'cornersDotOptions' | 'dotsOptions' | 'backgroundOptions';
}> = ({ className, options, setOptions, dataKey }) => {
    return (
        <div className={className}>
            <label>
                <input
                    type="color"
                    value={options[dataKey]?.color}
                    onChange={e => setOptions({...options, [dataKey]: {...options[dataKey], color: e.target.value}})}
                    data-key={dataKey}
                />
                <span>{options[dataKey]?.color}</span>
            </label>
        </div>
    );
}

export default styled(Color)`
    label {

    }
`;

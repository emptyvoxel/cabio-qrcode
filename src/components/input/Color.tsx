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
        <div className={className} style={{borderColor: options[dataKey]?.color}}>
            <select>
                <option>Cor</option>
                <option disabled>Degradê</option>
            </select>
            <label>
                <div>
                    <input
                        type="color"
                        value={options[dataKey]?.color}
                        onChange={e => setOptions({...options, [dataKey]: {...options[dataKey], color: e.target.value}})}
                        data-key={dataKey}
                    />
                </div>
                <div className="label">{options[dataKey]?.color}</div>
            </label>
            <div className="value"></div>
        </div>
    );
}

export default styled(Color)`
    display: grid;
    grid-template-columns: 5rem 8rem;
    position: relative;
    height: fit-content;
    width: fit-content;
    border: 1px solid;
    border-radius: 2rem;

    select {
        text-align: center;
        border: none;
        border-right: 1px solid #44444422;
        background: transparent;
        cursor: pointer;
        outline: none;
        border-radius: 2rem 0 0 2rem;

        &:hover {
            background: #0001;
        }
    }

    label {
        display: grid;
        grid-template-columns: 2rem 6rem;
        height: 2rem;
        align-items: center;
        width: fit-content;
        cursor: pointer;
        border-radius: 0 2rem 2rem 0;

        &:hover {
            background: #0001;
        }
    }

    div {
        width: 100%;
    }

    input[type=color] {
        border: none;
        background: none;
        outline: none;
        width: 1.9rem;
        height: 1.9rem;
        cursor: pointer;
    }

    .label {
        margin: 0 1rem;
    }
`;

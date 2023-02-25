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
            <input value={value} onChange={onChange} type="text" required/>
            <span className="label">{children}</span>
            <div className="gradient"></div>
        </div>
    );
}

export default styled(Text)`
    position: relative;
    height: 2rem;

    input[type=text] {
        position: absolute;
        outline: none;
        border: none;
        width: calc(100% - 12px);
        height: calc(100% - 2px);
        background-color: #fff;
        z-index: 1;
        left: 1px;
        top: 1px;
        font-size: 1.1rem;
        padding: 0 5px;

        + .label {
            position: absolute;
            z-index: 2;
            top: .3rem;
            left: .5rem;
            color: #333;
            pointer-events: none;
            transition: .25s ease-out all;
        }

        &:focus + .label,
        &:not(:focus):valid + .label {
            font-size: .6rem;
            top: -.4rem;
            background-color: #ffffff;
            padding: 0 5px;

            + .gradient {
                background: linear-gradient(to right, #0cebeb, #29ffc6)
            }
        }

        &:not(:focus):valid + .label {
            color: #0cebeb;
        }
    }

    .gradient {
        position: absolute;
        background: #000;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 0;
        transition: 1s ease-out all;
    }
`;

import React from 'react';
import QRCodeStyling, { FileExtension } from 'qr-code-styling';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const OPTIONS = ['svg', 'jpeg', 'png', 'webp'];

const Download: React.FC<{
    QRCode: QRCodeStyling;
    className?: string;
}> = ({ QRCode, className }) => {
    const [format, setFormat] = React.useState<FileExtension>('svg');

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => setFormat(e.target.value as FileExtension);
    const onClick = () => QRCode.download({extension: format});

    return (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{scale: 1}}
          className={className}
        >
            <input type="button" value="Download" onClick={onClick}/>
            <select onChange={onChange}>
                {OPTIONS.map(item => (
                    <option value={item} key={item}>{item.toUpperCase()}</option>
                ))}
            </select>
        </motion.div>
    );
}

export default styled(Download)`
    display: grid;
    grid-template-columns: 110px 70px;
    height: 2.5rem;
    width: 180px;
    margin: 0 auto;

    input[type=button] {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 2rem 0 0 2rem;
        background-color: #00d8d6;
        outline: none;
        cursor: pointer;
    }

    select {
        height: 100%;
        border: none;
        border-left: 1.5px solid #44444422;
        background-color: #00d8d6;
        outline: none;
        border-radius: 0 2rem 2rem 0;
        cursor: pointer;
    }
`;

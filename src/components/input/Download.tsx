import React from 'react';
import Select from './Select';
import QRCodeStyling, { FileExtension } from 'qr-code-styling';

const Download: React.FC<{
    QRCode: QRCodeStyling
}> = ({ QRCode }) => {
    const [format, setFormat] = React.useState<FileExtension>('svg');

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => setFormat(e.target.value as FileExtension);
    const onClick = () => QRCode.download({extension: format});

    return (
        <>
            <input type="button" value="Download" onClick={onClick}/>
            <Select options={['svg', 'png', 'jpeg', 'webp']} onChange={onChange}/>
        </>
    );
}

export default Download;

import React from 'react';
import QRCodeStyling, { FileExtension } from 'qr-code-styling';

const OPTIONS = ['svg', 'jpeg', 'png', 'webp'];

const Download: React.FC<{
    QRCode: QRCodeStyling
}> = ({ QRCode }) => {
    const [format, setFormat] = React.useState<FileExtension>('svg');

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => setFormat(e.target.value as FileExtension);
    const onClick = () => QRCode.download({extension: format});

    return (
        <>
            <input type="button" value="Download" onClick={onClick}/>
            <select onChange={onChange}>
                {OPTIONS.map(item => (
                    <option value={item} key={item}>{item.toUpperCase()}</option>
                ))}
            </select>
        </>
    );
}

export default Download;

import styled from '@emotion/styled';
import React from 'react';
import Select from './components/input/Select';
import Text from './components/input/Text';

import QRCodeStyling, {
    Options
} from 'qr-code-styling';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 100vw 1fr;
`;

const App: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [options, setOptions] = React.useState<Options>({
        width: 500,
        height: 500,
        type: 'svg',
        data: 'https://emptyvoxel.github.io/',
        image: '',
        margin: 20,
        imageOptions: {
            hideBackgroundDots: true,
            imageSize: .4
        },
        dotsOptions: {
            color: '#000',
            type: 'square'
        },
        backgroundOptions: {
            color: '#fff'
        },
        cornersDotOptions: {
            color: '#000',
            type: 'square'
        },
        cornersSquareOptions: {
            color: '#000',
            type: 'square'
        }
    });
    const [QRCode] = React.useState<QRCodeStyling>(new QRCodeStyling(options));

    React.useEffect(() => {
        if (ref.current) QRCode.append(ref.current);
    }, [QRCode, ref]);

    React.useEffect(() => {
        if (!QRCode) return;
        QRCode.update(options)
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOptions(op => ({
            ...op,
            data: event.target.value
        }));
    }

    return (
        <Wrapper>
            <div className="input">
                <Text onChange={onChange} value={options.data}>Conteúdo</Text>
            </div>
            <div className="input"></div>
            <div className="output" ref={ref}></div>
            <div className="input">
                <input type="button" value="Download"/>
                <Select options={['svg', 'png', 'jpeg']}/>
            </div>
        </Wrapper>
    );
}

export default App;

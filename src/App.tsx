import styled from '@emotion/styled';
import React from 'react';
import Text from './components/input/Text';
import Download from './components/input/Download';
import { OPTIONS } from './constants';

import QRCodeStyling, {
    Options
} from 'qr-code-styling';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 100px 100px 1fr 100px;
`;

const App: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [options, setOptions] = React.useState<Options>(OPTIONS);
    const [QRCode] = React.useState<QRCodeStyling>(new QRCodeStyling(options));
    const [fieldset, setFieldset] = React.useState<number>(0);

    React.useEffect(() => {
        if (ref.current) QRCode.append(ref.current);
    }, [QRCode, ref]);

    React.useEffect(() => {
        if (!QRCode) return;
        QRCode.update(options);
    }, [QRCode, options]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOptions(opt => ({
            ...opt,
            data: event.target.value
        }));
    }

    return (
        <Wrapper>
            <div className="input">
                <Text onChange={onChange} value={options.data}>Conteúdo</Text>
            </div>

            <div className="input">
            </div>

            <div className="output" ref={ref}></div>

            <div className="input">
                <Download QRCode={QRCode}/>
            </div>
        </Wrapper>
    );
}

export default App;

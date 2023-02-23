import { AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import React from 'react';

import Text from './components/input/Text';
import Download from './components/input/Download';
import Fieldset from './components/Fieldset';
import { OPTIONS } from './constants';

import QRCodeStyling, {
    Options
} from 'qr-code-styling';
import Switch from './components/input/Switch';
import Color from './components/input/Color';
import Select from './components/input/Select';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 100px 100px 1fr 100px;
`;

const App: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [options, setOptions] = React.useState<Options>(OPTIONS);
    const colorProps = {options, setOptions};
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

    const colorChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <Wrapper>
            <div className="input">
                <Text onChange={onChange} value={options.data}>Conteúdo</Text>
            </div>

            <div className="input" style={{position: 'relative'}}>
                <AnimatePresence>
                    {[(
                        <Fieldset key="general">
                            <Switch>Usar imagem</Switch>
                            <Switch>Cobrir fundo</Switch>
                            <Switch>Gerar automaticamente</Switch>
                        </Fieldset>
                      ), (
                        <Fieldset key="squares">
                            <Color {...colorProps} dataKey="cornersSquareOptions"/>
                            <Select options={['dot', 'square', 'extra-rounded']}/>
                        </Fieldset>
                      ), (
                        <Fieldset key="dots">
                            <Color {...colorProps} dataKey="cornersDotOptions"/>
                            <Select options={['dot', 'square']}/>
                        </Fieldset>
                      ), (
                        <Fieldset key="modules">
                            <Color {...colorProps} dataKey="dotsOptions"/>
                            <Select options={['rounded', 'dots', 'classy', 'classy-rounded', 'square', 'extra-rounded']}/>
                        </Fieldset>
                      ), (
                        <Fieldset key="background">
                            <Color {...colorProps} dataKey="backgroundOptions"/>
                        </Fieldset>
                      )
                    ][fieldset]}
                </AnimatePresence>
            </div>

            <div className="output" ref={ref} onClick={() => setFieldset(fieldset + 1)}></div>

            <div className="input">
                <Download QRCode={QRCode}/>
            </div>
        </Wrapper>
    );
}

export default App;

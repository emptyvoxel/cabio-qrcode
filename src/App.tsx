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
    grid-template-rows: 100px 100px 1fr 150px;
    height: 100%;
    margin: 0 auto;
    width: fit-content;
    min-width: ${OPTIONS.width}px;
    overflow: hidden;

    .input {
        height: 100%;
    }
`;

const App: React.FC = () => {
    const [settings, setSettings] = React.useState<any>({
        useImage: false,
        autoGenerate: true
    });
    const [options, setOptions] = React.useState<Options>(OPTIONS);
    const [QRCode] = React.useState<QRCodeStyling>(new QRCodeStyling(options));
    const colorProps = {options, setOptions};

    const [fieldset, setFieldset] = React.useState<number>(0);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const listener = () => {
            const d = { width: window.innerWidth, height: window.innerWidth };
            if (window.innerWidth + 350 > window.innerHeight) {
                d.width = window.innerHeight - 350;
                d.height = window.innerHeight - 350;
            }

            setOptions({ ...options, ...d });
        }

        window.addEventListener('resize', listener);

        return () => {
            window.removeEventListener('resize', listener);
        }
    }, [options, setOptions]);

    React.useEffect(() => {
        if (ref.current) QRCode.append(ref.current);
    }, [QRCode, ref]);

    React.useEffect(() => {
        if (!QRCode) return;
        QRCode.update(options);
    }, [QRCode, options]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOptions(opt => ({ ...opt, data: event.target.value }));
    }

    const onSwitch = (opt: string) => {
        setSettings({
            ...settings,
            [opt]: !settings[opt]
        });
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
                            <Switch
                                onClick={() => onSwitch('useImage')}
                                active={settings.useImage}
                                children="Usar imagem"
                            />
                            <Switch
                                onClick={() => onSwitch('autoGenerate')}
                                active={settings.autoGenerate}
                                children="Gerar automaticamente"
                            />
                        </Fieldset>
                      ), (
                        <Fieldset key="squares">
                            <Color {...colorProps} dataKey="cornersSquareOptions"/>
                            <Select {...colorProps}
                                dataKey="cornersSquareOptions"
                                opts={['dot', 'square', 'extra-rounded']}
                            />
                        </Fieldset>
                      ), (
                        <Fieldset key="dots">
                            <Color {...colorProps} dataKey="cornersDotOptions"/>
                            <Select {...colorProps}
                                dataKey="cornersDotOptions"
                                opts={['dot', 'square']}
                            />
                        </Fieldset>
                      ), (
                        <Fieldset key="modules">
                            <Color {...colorProps} dataKey="dotsOptions"/>
                            <Select {...colorProps}
                                dataKey="dotsOptions"
                                opts={['rounded', 'dots', 'classy', 'classy-rounded', 'square', 'extra-rounded']}
                            />
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

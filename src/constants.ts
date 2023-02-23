import { Options } from 'qr-code-styling';

export const OPTIONS: Options = {
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
        color: '#000000',
        type: 'square'
    },
    backgroundOptions: {
        color: '#ffffff'
    },
    cornersDotOptions: {
        color: '#000000',
        type: 'square'
    },
    cornersSquareOptions: {
        color: '#000000',
        type: 'square'
    }
};

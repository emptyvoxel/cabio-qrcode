import { Options } from 'qr-code-styling';

export const OPTIONS: Options = {
    width: 450,
    height: 450,
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
};

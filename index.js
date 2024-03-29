const elementQueries = {
    dots: 'rect[clip-path^="url(\'#clip-path-corners-dot"',
    squares: 'rect[clip-path^="url(\'#clip-path-corners-square"',
    modules: 'rect[clip-path="url(\'#clip-path-dot-color\')"]',
    background: 'rect[clip-path="url(\'#clip-path-background-color\')"]'
};

const corner = elementName => {
    const elements = document.querySelectorAll(elementQueries[elementName]);

    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
            elements.forEach(el => el.classList.add('active'));
        });

        element.addEventListener('mouseout', () => {
            elements.forEach(el => el.classList.remove('active'));
        });

        element.addEventListener('click', () => {
            const fieldset = document.querySelector(`fieldset#fieldset-${elementName}`);
            
            if (fieldset.classList.contains('active')) {
                fieldset.classList.remove('active');
                document.querySelector('fieldset#general').classList.add('active');
            }
            
            else {
                document.querySelector('fieldset.active').classList.remove('active');
                fieldset.classList.add('active');
            }
        });
    });
};

const app = Vue.createApp({
    data () {
        return {
            QRCode: null,
            size: 500,
            data: 'https://emptyvoxel.github.io/',
            logo: '',
            image: {
                cover: true,
                size: 0.4
            },
            modules: {
                color: '#000',
                type: 'square',
                // gradient
            },
            background: {
                color: '#fff',
                // gradient
            },
            corners: {
                square: {
                    color: '#000',
                    type: 'square',
                    // gradient
                },
                dot: {
                    color: '#000',
                    type: 'square'
                    // gradient
                }
            }
        }
    },
    methods: {
        configs () {
            return {
                type: 'svg',
                margin: 20,
                data: this.data || 'voxel',
                width: this.size,
                height: this.size,
                image: this.logo,
                imageOptions: { ...this.image },
                dotsOptions: { ...this.modules },
                backgroundOptions: { ...this.background },
                cornersSquareOptions: { ...this.corners.square },
                cornersDotOptions: { ...this.corners.dot }
            }
        },
        update () {
            this.QRCode.update(this.configs());
            corner('dots');
            corner('squares');
            corner('modules');
            corner('background');
        }
    },
    mounted () {
        this.QRCode = new QRCodeStyling(this.configs());
        this.QRCode.append(document.getElementById('output'));

        corner('dots');
        corner('squares');
        corner('modules');
        corner('background');
    }
});

app.mount('#app');


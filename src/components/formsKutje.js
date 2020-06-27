import React from 'react'
import './forms.scss'
import Header from './header'
import { FormPathsHorizontal, FormPathsVertical } from './formPaths'
import KUTE from 'kute.js'

export default class FormsKutje extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            horizontalPaths: [],
            verticalPaths: [],
            isBreakPoint: '',
            width: 0,
            height: 0,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.setState({ horizontalPaths: FormPathsHorizontal })
        this.setState({ verticalPaths: FormPathsVertical })
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    //https://css-tricks.com/many-tools-shape-morphing/
    //https://thednp.github.io/kute.js/
    render() {
        const renderHorizontalOrVerticalPaths = this.state.width > 600 ? this.state.horizontalPaths : this.state.verticalPaths
        const whichViewBox = this.state.width > 600 ? `0 0 1891.65 1049.79` : `0 0 397 851`

        var tween = KUTE.fromTo('#rectangle',  // target shape
            { path: '#formOne' }, // from shape
            { path: '#formTwo' }, // to shape
            { // options
                easing: 'easingCubicInOut',
                yoyo: true, repeat: 8, duration: 2500,
                morphIndex: 127
            }
        ).start();


        return (<>
            <section id="forms">
                <svg className="formItem"
                    id="ab9e6db3-c004-49c5-b031-1fda9a52585a"
                    xmlns="http://www.w3.org/2000/svg" viewBox={whichViewBox} preserveAspectRatio="none meet">
                    <path id="formOne" d="M 0 807.069 C 0 870.49 52.181 921.904 116.548 921.904 C 352.448 921.904 588.347 921.904 824.247 921.904 C 851.529 921.904 877.68 932.642 896.886 951.735 C 919.764 974.477 942.642 997.218 965.52 1019.96 C 984.725 1039.05 1010.88 1049.79 1038.16 1049.79 C 1280.793 1049.79 1523.427 1049.79 1766.06 1049.79 C 1835.7 1049.79 1892.05 993.957 1891.65 925.337 C 1891.65 744.426 1891.65 563.516 1891.65 382.605 C 1891.54 362.196 1882.99 342.715 1867.99 328.643 C 1806.16 271.549 1744.33 214.455 1682.5 157.361 C 1668.33 144.066 1649.51 136.65 1629.94 136.65 C 1541.943 136.65 1453.947 136.65 1365.95 136.65 C 1345.08 136.65 1325.07 128.482 1310.31 113.945 C 1279.443 83.532 1248.577 53.12 1217.71 22.707 C 1202.96 8.168 1182.94 0.001 1162.08 0.001 C 813.569 0.001 465.059 0.001 116.548 0.001 C 52.179 0.001 0 51.413 0 114.835 C 0 114.835 0 114.835 0 114.835 L 0 807.069" />
                    <path id="formTwo" style={{ visibility: 'hidden' }} d="M 0 570.538 C 0 810.163 210.872 1004.15 471.363 1004.15 C 570.598 1004.15 657.428 969.914 694.64 969.914 C 756.662 969.914 789.223 989.883 821.009 1009.852 C 852.795 1029.821 883.807 1049.79 942.727 1049.79 C 1029.56 1049.79 1097.78 992.734 1128.79 924.271 C 1197.01 804.459 1327.26 724.582 1488.51 724.582 C 1562.94 724.582 1618.76 741.699 1662.17 741.699 C 1786.22 741.699 1891.65 650.412 1891.65 530.601 C 1891.65 483.056 1884.586 436.62 1871.349 392.245 C 1858.112 347.87 1838.702 305.555 1814.008 266.251 C 1789.314 226.947 1759.338 190.655 1724.967 158.324 C 1690.598 125.994 1651.834 97.625 1609.569 74.17 C 1567.303 50.714 1521.534 32.172 1473.152 19.493 C 1424.771 6.815 1373.777 0 1321.06 0 C 1041.96 0 942.727 193.982 769.065 193.982 C 676.033 193.982 614.012 131.223 471.363 131.223 C 341.118 131.223 223.277 181.145 137.997 261.02 C 52.718 340.896 0 450.724 0 570.538 L 0 570.538" />
                </svg>
            </section>
            <Header />
        </>
        )
    }
}
//Animation:
// https://codepen.io/nicoladelazzari/pen/PRVEPp


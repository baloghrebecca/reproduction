import React from 'react'
import './forms.scss'
import Header from './header'
import { FormPathsHorizontal, FormPathsVertical } from './formPaths'

export default class Forms extends React.Component {

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
        return (<>
            <section id="forms">
                <svg className="formItem"
                    id="ab9e6db3-c004-49c5-b031-1fda9a52585a"
                    xmlns="http://www.w3.org/2000/svg" viewBox={whichViewBox} preserveAspectRatio="none meet">
                    <path id="form">
                        <animate id="animationToCheck"
                            repeatCount="indefinite" attributeName="d" dur="12s"
                            values={renderHorizontalOrVerticalPaths} />
                    </path>
                </svg>
            </section>
            <Header />
        </>
        )
    }
}
//Animation:
// https://codepen.io/nicoladelazzari/pen/PRVEPp


import React from 'react'

import anime from 'animejs/lib/anime.es.js';
import { showOverflow, hideOverflow } from '../services/manageOverflow'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import { bean, beanMobile } from '../services/getSvgBeans'
import { ReducedMotion } from 'framer-motion';

export default class HeaderMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false,
            display: "block",
            visibility: 'visible',
            active: false,
            top: "translateY(-100%)",
            width: 0,
            height: 0,
            cursor: "pointer",
            heightBean: "18.5",
            scaleX: 0,
            widthBean: "33",
            opacity: 0,
            displayText: 'none',
        }
    };

    componentWillMount() {
        const showLogo = () => this.setState({ flag: true, opacity: 1 })

        setTimeout(showLogo, 100)
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });

        if (this.state.width > 1200) {
            this.setState({ top: "translateY(-100%)", visibility: 'visible' })
            showOverflow()
        }
    }

    handleClickLink = (e) => {
        showOverflow()
    }

    handleClickLogo = (e) => {
        if (this.state.width <= 1200) {
            e.preventDefault()

            let distance = this.getRightDistance();
            anime({
                targets: '.h1mobile',
                translateX: [-distance, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad'
            });
            this.setState({ top: 'translateY(0%)', visibility: 'hidden' })

            hideOverflow()
        }
    };

    handleClickBurger = (e) => {
        e.preventDefault()
        e.stopPropagation()

        let distance = this.getRightDistance();

        anime({
            targets: '.h1mobile',
            translateX: [0, -distance],
            opacity: [1, 0],
            easing: 'easeInOutQuad',
            duration: 400
        });

        setTimeout(() => {
            this.setState({ top: 'translateY(-100%)' })
        }, 450)

        setTimeout(() => {
            this.setState({ visibility: 'visible' });
        }, 500)

        showOverflow()
    };

    handleChange = () => {
        let distance = this.getRightDistance();

        anime({
            targets: '#poolLogo',
            translateX: [0, distance],
            easing: 'easeInOutQuad'
        });

        anime({
            targets: '#poolSubheadline',
            opacity: [0, 1],
            translateX: [-distance, 0],
            easing: 'easeInOutQuad'
        });

    }



    handleLeave = () => {
        let distance = this.getRightDistance();

        anime({
            targets: '#poolLogo',
            translateX: [distance, 0],
            easing: 'easeInOutQuad'
        });

        anime({
            targets: '#poolSubheadline',
            opacity: [1, 0],
            translateX: [0, -distance,],
            easing: 'easeInOutQuad'
        });
    };

    getRightDistance() {
        const { width } = this.state;

        let distance = 290;
        if (width < 750) {
            distance = 161;
        }

        return distance;
    }

    render() {
        return (<>
            <MobileNavigation
                display={this.state.display}
                top={this.state.top}
                handleClick={this.handleClickBurger}
                width={this.state.width}
                bean={bean}
                beanMobile={beanMobile}
                landingPage='false'
            />
            <Navigation
                visibility={this.state.visibility}
                handleClick={this.handleClickLogo}
                handleClickMenu={this.handleClickBurger}
                handleMouseEnter={this.handleChange}
                handleMouseLeave={this.handleLeave}
                displayText={this.state.displayText}
                width={this.state.width}
                bean={bean}
                beanMobile={beanMobile}
            />
        </>)
    };
}


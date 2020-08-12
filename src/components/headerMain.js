import React from 'react'
import './headerMain.scss'
import anime from 'animejs/lib/anime.es.js';
import { showOverflow, hideOverflow } from '../services/manageOverflow'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import { bean, beanMobile } from '../services/getSvgBeans'

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
            translatePool: "translateY(281px)",
        }
    };

    UNSAFE_componentWillMount() {
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
        //if desktop, hide mobile navigation
        if (this.state.width > 1200) {
            this.setState({ top: "translateY(-100%)", visibility: 'visible' })
            showOverflow()
        }
        if (this.state.width < 750) {
            this.setState({ translatePool: "translateY(157px)"})
            showOverflow()
        }
    }

    handleClickLink = (e) => {
        showOverflow()
    }

    handleClickLogo = (e) => {
        if (this.state.width <= 1200) {
            e.preventDefault()
            this.setState({ top: 'translateY(0%)', visibility: 'hidden' })
            hideOverflow()
        }
    };

    handleClickBurger = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({ top: 'translateY(-100%)' })
        setTimeout(() => {
            this.setState({ visibility: 'visible' });
        }, 500)
        showOverflow()
    };

    handleChange = () => {
        const { width } = this.state
        // this.setState({ displayText: 'inline-block' })
        //281
        //157
        const widthOfPoolText = width <= 1200 ? 157 : 281
        anime.timeline({ loop: false })
            .add({
                targets: '#text',
                translateX: 250,
                duration: 800,
            })
            .add({
                targets: '#poolText',
                translateX: [0, document.querySelector('#text').getBoundingClientRect().width + 6.2],
                // translateX: [0, `${widthOfPoolText}`],
                easing: "easeOutExpo",
                duration: 800,
            })
            .add({
                targets: '#poolText',
                translateX: [0, 0],
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 0,
                // direction: 'alternate',
            })
    };

    handleLeave = () => {
        this.setState({ displayText: 'none' })
        anime.timeline({ loop: false })
            .add({
                targets: '#poolText',
                translateX: [document.querySelector('#text').getBoundingClientRect().width + 6.2, 0],
                easing: "easeOutExpo",
                duration: 600,
            })
    };

    render() {
        return (<>
            <MobileNavigation
                display={this.state.display}
                top={this.state.top}
                handleClick={this.handleClickBurger}
                width={this.state.width}
                bean={bean}
                beanMobile={beanMobile}
            />
            <Navigation
                // numberOfItems={this.state.cartItemsLength}
                translatePool={this.state.translatePool}
                visibility={this.state.visibility}
                handleClick={this.handleClickLogo}
                handleClickMenu={this.handleClickBurger}
                handleMouseEnter={this.handleChange}
                handleMouseLeave={this.handleLeave}
                displayText='inline-block'
                width={this.state.width}
                bean={bean}
                beanMobile={beanMobile}
            />
        </>)
    };
}


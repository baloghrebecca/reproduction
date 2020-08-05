import React from 'react'
import { Link } from 'gatsby'
import './headerMain.scss'
import Forms from './forms'
import { navigate } from '@reach/router';
import anime from 'animejs/lib/anime.es.js';
import { showOverflow, hideOverflow } from '../services/manageOverflow'
import { bean, beanMobile } from '../services/getSvgBeans'
import MobileNavigation from './MobileNavigation'

export default class HeaderLandingPageCopy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: true,
            color: '',
            display: "block",
            displayForms: "block",
            visibility: 'visible',
            visibilityForms: 'visible',
            top: "translateY(100%)",
            width: 0,
            height: 0,
            opacity: 1,
            cursor: "pointer",
            heightBean: "18.5",
            widthBean: "33",
            opacityO: 1,
            displayText: 'none',
            opacityBean: 0,
        }
        this.forms = React.createRef()
        this.navigation = React.createRef()
        this.scroll = React.createRef()
    };

    componentDidMount() {
        this.updateWindowDimensions();
        const windowEventListener = window.addEventListener;
        windowEventListener('resize', this.updateWindowDimensions);
        windowEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        const windowEventRemover = window.removeEventListener;
        windowEventRemover('resize', this.updateWindowDimensions);
        windowEventRemover('scroll', this.handleScroll);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        //if desktop, hide mobile navigation
        if (this.state.width > 1100) {
            this.setState({ top: "translateY(100%)", visibility: 'visible' })
            showOverflow();
        }
    }

    handleClickLink = (e) => {
        //reactivate scroll on body
        showOverflow();
    }

    handleClickLogo = (e) => {
        if (this.state.width <= 1100) {
            // e.preventDefault()
            this.setState({ top: 'translateY(-100%)', visibility: 'hidden' })
            //deactivate scroll on body
            hideOverflow();
        }
    };

    handleClickBurger = (e) => {
        e.preventDefault()
        this.setState({ top: 'translateY(100%)' })
        setTimeout(() => {
            this.setState({ visibility: 'visible' });
        }, 500)
        showOverflow();
    };

    handleChange = () => {
        // this.setState({ text: "LIFE IS BETTER AT THE " })
        const setDisplay = () => this.setState({ displayText: 'inline-block' })
        setDisplay()
        anime.timeline({ loop: false })
            .add({
                targets: '#poolText',
                translateX: [0, document.querySelector('#text').getBoundingClientRect().width + 6.2],
                easing: "easeOutExpo",
                duration: 800,
            })
            .add({
                targets: '#text',
                translateX: [-50, 0],
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 0,
                direction: 'alternate',
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

    handleScroll = (link, e) => {
        // e.preventDefault()
        // e.stopPropagation()
        var fired = false;
        if (fired === false) {
            hideOverflow();
            let height = -window.innerHeight + 60
            if (window.innerWidth < 750) {
                height = -window.innerHeight + 60
            } else {
                height = -window.innerHeight + 60
            }
            const hideLogo = () => this.setState({ flag: false, opacityO: 0, opacityBean: 1, color: '#dddddd' })
            setTimeout(hideLogo, 450)

            anime({
                targets: '#landingPageWrapper',
                translateY: height,
                easing: 'easeInOutQuad',
                complete: function (anim) {
                    console.log(link);
                    const navigatoTo = () => {
                        if (link === '/books' || link === '/about' || link === '/stockists' || link === '/cart') {
                            navigate(`${link}`)
                        } else {
                            navigate(`/books`)
                        }
                    }
                    navigatoTo()
                }
            });
            this.setState({ opacity: 0 })
            fired = true;
        }
    }

    //Refactor navigation
    render() {
        return (<>
            <div id="landingPageWrapper">
                <div ref={this.forms} style={{ overflow: 'hidden' }} onClick={(e) => this.handleScroll('/books', e)} id="formsDiv" style={{ opacity: this.state.opacity, display: this.state.displayForms }}>
                    <Forms />
                </div>
                <MobileNavigation
                    display={this.state.display}
                    top={this.state.top}
                    handleClick={this.handleClickBurger}
                    width={this.state.width}
                    bean={bean}
                    beanMobile={beanMobile}
                />
                <header ref={this.navigation} id="headerMainLandingPage" style={{ visibility: this.state.visibility }}>
                    <h1 id="h1Main"
                        onClick={this.handleClickLogo}
                        onMouseEnter={this.handleChange}
                        onMouseLeave={this.handleLeave}>
                        <span ref={this.poolText} id='text' style={{ display: this.state.displayText, transform: `translateX(-280px)` }}>LIFE IS BETTER AT THE  </span>
                        <span id="poolText">P{this.state.flag ? <span style={{ opacity: this.state.opacityO }}>OO</span> : <span style={{ opacity: this.state.opacityBean }} id="beanWrapper">{this.state.width < 750 ? beanMobile : bean}</span>}L</span></h1>
                    <nav id="navMain">
                        <a onClick={(e) => this.handleScroll('/books', e)} style={{ cursor: 'pointer' }}>BOOKS</a>,
                        <a onClick={(e) => this.handleScroll('/about', e)} style={{ cursor: 'pointer' }}> ABOUT</a>,
                        <a onClick={(e) => this.handleScroll('/stockists', e)} style={{ cursor: 'pointer' }}> STOCKISTS</a>
                    </nav>
                    <Link
                        className="menuMain"
                        to='/'
                        onClick={this.handleClickLogo}
                    >Menu</Link>
                    <a
                        className="cartMain"
                        id="cartMain"
                        onClick={(e) => this.handleScroll('/cart', e)}
                        style={{ cursor: 'pointer' }}
                    >2 ITEMS (35€)</a>
                </header>
            </div>
        </>)
    };
}


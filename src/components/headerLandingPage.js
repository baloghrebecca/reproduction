import React from 'react'
import { Link } from 'gatsby'
import './headerMain.scss'
import Forms from './forms'
import { navigate } from '@reach/router';
import anime from 'animejs/lib/anime.es.js';

export default class HeaderLandingPageCopy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: true,
            text: "",
            color: '',
            display: "block",
            displayForms: "block",
            visibility: 'visible',
            visibilityForms: 'visible',
            active: false,
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
            this.showOverflow();
        }
    }

    handleClickLink = (e) => {
        //reactivate scroll on body
        this.showOverflow();
    }

    handleClickLogo = (e) => {
        if (this.state.width <= 1100) {
            // e.preventDefault()
            this.setState({ top: 'translateY(-100%)', visibility: 'hidden' })
            //deactivate scroll on body
            this.hideOverflow();
        }
    };

    handleClickBurger = (e) => {
        e.preventDefault()
        this.setState({ top: 'translateY(100%)' })
        setTimeout(() => {
            this.setState({ visibility: 'visible' });
        }, 500)
        this.showOverflow();
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
            translateX: [-50,0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 0,
            direction: 'alternate',
        })
    };

    handleLeave = () => {
        // this.setState({ text: "" })
        this.setState({ displayText: 'none' })
        const displayChange = () => this.setState({ scaleX: 0 })
        setTimeout(displayChange, 100)
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
            this.hideOverflow();
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
                        if (link === '/books' || link === '/about' || link === '/stockings') {
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
        const svg = <svg height="18.5" width="33">
            <path className="bean" d="M26.4446457,2.77773641 C23.8888515,2.77773641 23.1114331,4.55528667 19.7782205,4.55528667 C14.3338077,4.55528667 14.1110967,0 8.44480091,0 C3.77780653,0 0,3.77792256 0,8.33320923 C0,15.0002792 6.55548369,18 14.7775737,18 C21.3338853,18 32,14.5554728 32,8.33320923 C32,5.33348846 29.4450338,2.77773641 26.4446457,2.77773641" />
        </svg>
        const svgMobile = <svg height="9.80" width="16.5" >
            <path id="smallBean" className="bean" d="M13.22,1.39c-1.28,0-1.66.89-3.33.89C7.17,2.28,7.06,0,4.22,0A4.21,4.21,0,0,0,0,4.17C0,7.5,3.28,9,7.39,9,10.67,9,16,7.28,16,4.17A2.83,2.83,0,0,0,13.22,1.39Z" />
        </svg>
        return (<>
            <div id="landingPageWrapper">
                <div ref={this.forms} style={{ overflow: 'hidden' }} onClick={(e) => this.handleScroll('/books', e)} id="formsDiv" style={{ opacity: this.state.opacity, display: this.state.displayForms }}>
                    <Forms />
                </div>
                <nav id="mobileNav" style={{ display: this.state.display, transform: this.state.top }}>
                    <div id="burgerWrapper">
                        <div className="close" onClick={this.handleClickBurger}>
                        </div>
                    </div>
                    <div id="mobileNestedNav">
                        <div>
                            <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/books'>BOOKS</Link>
                            <Link activeClassName="activeMobile" to='/about'>ABOUT</Link>
                            <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/stockings'>STOCKINGS</Link>
                            <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/cart'>0 ITEMS (0€)</Link>
                        </div>
                        <div>
                            <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/imprint'>IMPRINT</Link>
                            <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/imprint'>TERMS</Link>
                            <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/imprint'>PRIVACY POLICY</Link>
                        </div>
                    </div>
                </nav>
                <header ref={this.navigation} id="headerMainLandingPage" style={{ visibility: this.state.visibility }}>
                    <h1 id="h1Main"
                        onClick={this.handleClickLogo}
                        onMouseEnter={this.handleChange}
                        onMouseLeave={this.handleLeave}>
                        <span ref={this.poolText} id='text' style={{ display: this.state.displayText, transform: `translateX(-280px)` }}>LIFE IS BETTER AT THE  </span>
                        <span id="poolText">P{this.state.flag ? <span style={{ opacity: this.state.opacityO }}>OO</span> : <span style={{ opacity: this.state.opacityBean }} id="beanWrapper">{this.state.width < 750 ? svgMobile : svg}</span>}L</span></h1>
                    <nav id="navMain">
                        <a onClick={(e) => this.handleScroll('/books', e)} style={{cursor: 'pointer'}}>BOOKS</a>,
                        <a onClick={(e) => this.handleScroll('/about', e)} style={{cursor: 'pointer'}}> ABOUT</a>,
                        <a onClick={(e) => this.handleScroll('/stockings', e)} style={{cursor: 'pointer'}}> STOCKINGS</a>
                    </nav>
                    <Link id="cartMain" to='/cart'>2 ITEMS (35€)</Link>
                </header>
            </div>
        </>)
    };

    showOverflow() {
        document.body.style.overflow = "";
    }

    hideOverflow() {
        document.body.style.overflow = "hidden";
    }
}


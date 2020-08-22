import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/headerMain.module.scss'
import styleForm from '../styles/forms.module.scss'
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

        if (this.state.width > 1200) {
            this.setState({ top: "translateY(100%)", visibility: 'visible' })
            showOverflow();
        }
    }

    handleClickLink = (e) => {

        showOverflow();
    }

    handleClickLogo = (e) => {
        if (this.state.width <= 1200) {

            this.setState({ top: 'translateY(-100%)', visibility: 'hidden' })

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

                <header ref={this.navigation} id={styles.headerMainLandingPage} style={{ visibility: this.state.visibility }}>

                    <h1 id={styles.h1Main}
                        onClick={this.handleClickLogo}
                        onMouseEnter={this.handleChange}
                        onMouseLeave={this.handleLeave}>
                        <span
                            ref={this.poolText}
                            id='text'
                            className={styles.text}
                            style={{ display: this.state.displayText, transform: `translateX(-280px)` }}>LIFE IS BETTER AT THE  </span>
                        <span
                            id="poolText"
                            className={styles.poolText}>
                            P{this.state.flag
                                ? <span style={{ opacity: this.state.opacityO }}>OO</span>
                                : <span style={{ opacity: this.state.opacityBean }} id={styles.beanWrapper}>{this.state.width < 750 ? beanMobile : bean}</span>}L</span>
                    </h1>

                    <nav id={styles.navMain}>
                        <a onClick={(e) => this.handleScroll('/books', e)} style={{ cursor: 'pointer' }}>BOOKS</a>,
                        <a onClick={(e) => this.handleScroll('/about', e)} style={{ cursor: 'pointer' }}> ABOUT</a>,
                        <a onClick={(e) => this.handleScroll('/stockists', e)} style={{ cursor: 'pointer' }}> STOCKISTS</a>
                    </nav>

                    <Link
                        className={styles.menuMain}
                        to='/'
                        onClick={this.handleClickLogo}
                    >Menu</Link>

                    <a
                        className={styles.cartMain}
                        id={styles.cartMain}
                        onClick={(e) => this.handleScroll('/cart', e)}
                        style={{ cursor: 'pointer' }}
                    >{this.props.itemSize} {this.props.items} ({this.props.totalPrice}€)</a>
                    
                </header>
            </div>
        </>)
    };
}


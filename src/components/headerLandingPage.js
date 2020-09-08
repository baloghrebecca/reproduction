import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/headerMain.module.scss'
import FormsHover from './formsHover'
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

            let distance = this.getRightDistance();
            anime({
                targets: '.h1mobile',
                translateX: [-distance, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad'
            });

            this.setState({ top: 'translateY(-100%)', visibility: 'hidden' })

            hideOverflow();
        }
    };

    handleClickBurger = (e) => {
        e.preventDefault()

        let distance = this.getRightDistance();

        anime({
            targets: '.h1mobile',
            translateX: [0, -distance],
            opacity: [1, 0],
            easing: 'easeInOutQuad',
            duration: 400
        });

        setTimeout(() => {
            this.setState({ top: 'translateY(100%)' })
        }, 450)

        setTimeout(() => {
            this.setState({ visibility: 'visible' });
        }, 500)

        showOverflow();
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
    };

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

    handleScroll = (link, e) => {

        var fired = false;

        if (fired === false) {
            // hideOverflow();

            let height = -window.innerHeight + 60
            if (window.innerWidth < 750) {
                height = -window.innerHeight + 50
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

    getRightDistance() {
        const { width } = this.state;

        let distance = 290;
        if (width < 750) {
            distance = 161;
        }

        return distance;
    }

    //Refactor navigation
    render() {
        const cartLink = <a
            className={styles.cartMain}
            id={styles.cartMain}
            onClick={(e) => this.handleScroll('/cart', e)}
            style={{ cursor: 'pointer' }}
        >{this.props.itemSize} {this.props.items} ({this.props.totalPrice}€)</a>

        const cartLinkDeactivated = <p id={styles.cartMain}
            className={styles.cartMain}>{this.props.itemSize} {this.props.items} ({this.props.totalPrice}€)</p>

        return (<>
            <div id="landingPageWrapper">

                    <FormsHover opacity={this.state.opacity} displayForms={this.state.displayForms} handleScroll={(e) => this.handleScroll('/books', e)} />


                <MobileNavigation
                    display={this.state.display}
                    top={this.state.top}
                    handleClick={this.handleClickBurger}
                    width={this.state.width}
                    bean={bean}
                    beanMobile={beanMobile}
                    landingPage='true'
                />

                <header ref={this.navigation} id={styles.headerMainLandingPage} style={{ visibility: this.state.visibility }}>
                    <div id={styles.dividerForMousoverLandingPage}
                        onClick={this.handleClickLogo}
                        onMouseEnter={this.handleChange}
                        onMouseLeave={this.handleLeave}
                    >
                    </div>
                    <h1 id={styles.h1Main}>
                        <div
                            ref={this.poolLogo}
                            id='poolSubheadline'
                            className={styles.poolSubheadline}
                        >LIFE IS BETTER AT THE  </div>
                        <p
                            id="poolLogo"
                            className={styles.poolLogo}>
                            P{this.state.flag
                                ? <span style={{ opacity: this.state.opacityO }}>OO</span>
                                : <span style={{ opacity: this.state.opacityBean }}
                                    id={styles.beanWrapper}>{this.state.width < 750 ? beanMobile : bean}</span>}L</p>
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

                    {this.props.itemSize === 0
                        ? cartLinkDeactivated
                        : cartLink}

                </header>
            </div>
        </>)
    };
}


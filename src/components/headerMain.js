import React from 'react'
import { Link } from 'gatsby'
import './headerMain.scss'
import anime from 'animejs/lib/anime.es.js';
//delay with navigate to!!!
export default class HeaderMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
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
            y: 0,
            opacity: 0,
            displayText: 'none',
            beanMobile: `M13.22,1.39c-1.28,0-1.66.89-3.33.89C7.17,2.28,7.06,0,4.22,0A4.21,4.21,0,0,0,0,4.17C0,7.5,3.28,9,7.39,9,10.67,9,16,7.28,16,4.17A2.83,2.83,0,0,0,13.22,1.39Z`,
            bean: `M26.4446457,2.77773641 C23.8888515,2.77773641 23.1114331,4.55528667 19.7782205,4.55528667 C14.3338077,4.55528667 14.1110967,0 8.44480091,0 C3.77780653,0 0,3.77792256 0,8.33320923 C0,15.0002792 6.55548369,18 14.7775737,18 C21.3338853,18 32,14.5554728 32,8.33320923 C32,5.33348846 29.4450338,2.77773641 26.4446457,2.77773641`
        }
        this.poolText = React.createRef();
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
        //if desktop, hide mobile navigation
        if (this.state.width > 1100) {
            this.setState({ top: "translateY(-100%)", visibility: 'visible' })
            document.body.style.overflow = ""
        }
    }

    handleClickLink = (e) => {
        //reactivate scroll on body
        document.body.style.overflow = "";
    }

    handleClickLogo = (e) => {
        if (this.state.width <= 1100) {
            e.preventDefault()
            this.setState({ top: 'translateY(0%)', visibility: 'hidden' })
            //deactivate scroll on body
            document.body.style.overflow = "hidden";
        }
    };

    handleClickBurger = (e) => {
        e.preventDefault()
        this.setState({ top: 'translateY(-100%)' })
        setTimeout(() => {
            this.setState({ visibility: 'visible' });
        }, 500)
        document.body.style.overflow = "";
    };

    handleChange = () => {
        const setDisplay = () => this.setState({ displayText: 'inline-block' })
        setDisplay()
        anime.timeline({ loop: false })
        .add({
            targets: '#poolText',
            translateX: [0, document.querySelector('#text').getBoundingClientRect().width + 6.2],
            easing: "easeOutExpo",
            duration: 500,
        })
        .add({
            targets: '#text',
            // opacity: [0, 1],
            translateX: [-100,0],
            easing: "easeInExpo",
            duration: 0,
        })
    };

    handleLeave = () => {
        this.setState({ displayText: 'none' })
        const displayChange = () => this.setState({ scaleX: 0 })
        setTimeout(displayChange, 10)
        // this.setState({ text: "" })

        anime.timeline({ loop: false })
        .add({
            targets: '#poolText',
            translateX: [document.querySelector('#text').getBoundingClientRect().width + 6.2, 0],
            easing: "easeOutExpo",
            duration: 600,
        })
    };

    render() {
        const svg = <svg height="18.5" width="33">
            <path className="bean" d="M26.4446457,2.77773641 C23.8888515,2.77773641 23.1114331,4.55528667 19.7782205,4.55528667 C14.3338077,4.55528667 14.1110967,0 8.44480091,0 C3.77780653,0 0,3.77792256 0,8.33320923 C0,15.0002792 6.55548369,18 14.7775737,18 C21.3338853,18 32,14.5554728 32,8.33320923 C32,5.33348846 29.4450338,2.77773641 26.4446457,2.77773641" />
        </svg>
        const svgMobile = <svg height="9.80" width="16.5" >
            <path id="smallBean" className="bean" d="M13.22,1.39c-1.28,0-1.66.89-3.33.89C7.17,2.28,7.06,0,4.22,0A4.21,4.21,0,0,0,0,4.17C0,7.5,3.28,9,7.39,9,10.67,9,16,7.28,16,4.17A2.83,2.83,0,0,0,13.22,1.39Z" />
        </svg>
        return (<>
            <nav id="mobileNav" style={{ display: this.state.display, transform: this.state.top }}>
                <div id="burgerWrapper">
                    <div className="close" onClick={this.handleClickBurger}>
                    </div>
                </div>
                <div id="mobileNestedNav">
                    <div>
                        <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/books'>BOOKS</Link>
                        <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/about'>ABOUT</Link>
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
            <header id="headerMain" style={{ visibility: this.state.visibility }}>
                <h1 id="h1Main"
                    onClick={this.handleClickLogo}
                    onMouseEnter={this.handleChange}
                    onMouseLeave={this.handleLeave}><span ref={this.poolText} id='text' style={{ display: this.state.displayText, transform: `translateX(-280px)` }}>LIFE IS BETTER AT THE  </span>
                    <span id="poolText">P<span style={{ transform: `translateY(${this.state.y})` }} id="beanWrapper">{this.state.width < 750 ? svgMobile : svg}</span>L</span></h1>
                <nav id="navMain">
                    <Link activeClassName="active" to='/books'>BOOKS</Link>,
                    <Link activeClassName="active" to='/about'> ABOUT</Link>,
                    <Link activeClassName="active" to='/stockings'> STOCKINGS</Link>
                </nav>
                <Link id="cartMain" to='/cart'>2 ITEMS (35€)</Link>
            </header>
        </>)
    };
}


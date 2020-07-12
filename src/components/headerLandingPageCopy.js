import React from 'react'
import { Link } from 'gatsby'
import './headerMain.scss'
import Forms from '../components/forms'
import scrollToComponent from 'react-scroll-to-component';
import { navigate } from '@reach/router';

export default class HeaderLandingPageCopy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            color: 'black',
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
            header: 'headerMainLandingPage',
            hasScrolled: true,
        }
        this.handleClickLink = this.handleClickLink.bind(this)
        this.handleClickLogo = this.handleClickLogo.bind(this)
        this.handleClickBurger = this.handleClickBurger.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleScroll = this.handleScroll.bind(this)
        this.myRef = React.createRef()

    };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('scroll', this.handleScroll);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        //if desktop, hide mobile navigation
        if (this.state.width > 1100) {
            this.setState({ top: "translateY(100%)", visibility: 'visible' })
            document.body.style.overflow = ""
        } 
    }

    handleClickLink(e) {
        //reactivate scroll on body
        document.body.style.overflow = "";
    }

    handleClickLogo(e) {
        if (this.state.width <= 1100) {
            // e.preventDefault()
            this.setState({ top: 'translateY(-100%)', visibility: 'hidden' })
            //deactivate scroll on body
            document.body.style.overflow = "hidden";
        }
    };

    handleClickBurger(e) {
        e.preventDefault()
        this.setState({ top: 'translateY(100%)' })
        setTimeout(() => {
            this.setState({ visibility: 'visible' });
        }, 500)
        document.body.style.overflow = "";
    };

    handleChange() {
        this.setState({ text: "LIFE IS BETTER AT THE " })
    };

    handleLeave() {
        this.setState({ text: "" })
    };

    handleScroll(e) {
        var scrolled = document.scrollingElement.scrollTop;
        var position = this.myRef.current.offsetTop;

        //if scrollTop == offsetTop 
        if (scrolled >= position) {
            navigate('/books')
        }

        if (this.state.hasScrolled) {
            this.setState({ opacity: 0, color: '#dddddd' })
            this.setState({ hasScrolled: false});
            const reference = document.getElementById('headerMainLandingPage')
            document.body.style.overflow = "hidden";
            scrollToComponent(reference, { offset: 0, align: 'top', duration: 500, ease:'' });
        } else {
            return;
        }
    }


    render() {
        return (<div id="landingPageWrapper">
            <div id="formsDiv" style={{ opacity: this.state.opacity, display: this.state.displayForms }}>
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
                        <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/about'>ABOUT</Link>
                        <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/stockings'>STOCKINGS</Link>
                        <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/'>0 ITEMS (0€)</Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/imprint'>IMPRINT</Link>
                        <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/imprint'>TERMS</Link>
                        <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/imprint'>PRIVACY POLICY</Link>
                    </div>
                </div>
            </nav>
            <header ref={this.myRef} id="headerMainLandingPage" style={{ visibility: this.state.visibility }}>
                <h1 id="h1Main" onClick={() => this.handleClickLogo(this.navigateTo)} onMouseEnter={this.handleChange} onMouseLeave={this.handleLeave}>{this.state.text} POOL</h1>
                <nav id="navMain">
                    <Link activeClassName="active" to='/books' style={{color: this.state.color}}>BOOKS</Link>,
                    <Link activeClassName="active" to='/about'> ABOUT</Link>,
                    <Link activeClassName="active" to='/stockings'> STOCKINGS</Link>
                </nav>
                <Link id="cartMain" to='/'>0 ITEMS (0€)</Link>
            </header>
        </div>)
    };
}


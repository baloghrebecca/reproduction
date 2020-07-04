import React from 'react'
import { Link } from 'gatsby'
import './headerMain.scss'

export default class HeaderMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            display: "block",
            visibility: 'visible',
            active: false,
            top: "translateY(0%)",
            width: 0,
            height: 0,
            cursor: "pointer",
            heightBean: "18.5",
            widthBean: "33",
            beanMobile: `M13.22,1.39c-1.28,0-1.66.89-3.33.89C7.17,2.28,7.06,0,4.22,0A4.21,4.21,0,0,0,0,4.17C0,7.5,3.28,9,7.39,9,10.67,9,16,7.28,16,4.17A2.83,2.83,0,0,0,13.22,1.39Z`,
            bean: `M26.4446457,2.77773641 C23.8888515,2.77773641 23.1114331,4.55528667 19.7782205,4.55528667 C14.3338077,4.55528667 14.1110967,0 8.44480091,0 C3.77780653,0 0,3.77792256 0,8.33320923 C0,15.0002792 6.55548369,18 14.7775737,18 C21.3338853,18 32,14.5554728 32,8.33320923 C32,5.33348846 29.4450338,2.77773641 26.4446457,2.77773641`
        }
        this.handleClickLink = this.handleClickLink.bind(this)
        this.handleClickLogo = this.handleClickLogo.bind(this)
        this.handleClickBurger = this.handleClickBurger.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });

        //if desktop, hide mobile navigation
        if(this.state.width >= 1100) {
            this.setState({top: "translateY(0%)", visibility: 'visible'})
            document.body.style.overflow = ""
        }
    }

    handleClickLink(e) {
        //deactivate scroll on body
        document.body.style.overflow = "";
    }

    handleClickLogo(e) {
        if (this.state.width <= 1100) {
            e.preventDefault()
            this.setState({ top: 'translateY(-100%)', visibility: 'hidden' })
            document.body.style.overflow = "hidden";
        }
    };

    handleClickBurger(e) {
        e.preventDefault()
        this.setState({ top: 'translateY(0%)'})
        setTimeout(() => {
            this.setState({visibility: 'visible'});
          }, 550)
        document.body.style.overflow = "";
    };

    handleChange() {
        this.setState({ text: "LIFE IS BETTER AT THE " })
    };

    handleLeave() {
        this.setState({ text: "" })
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
                        <Link onClick={this.handleClickLink} activeClassName="activeMobile" to='/book'>BOOKS</Link>
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
            <header id="headerMainLandingPage" style={{ visibility: this.state.visibility}}>
                <h1 id="h1Main" onClick={this.handleClickLogo} onMouseEnter={this.handleChange} onMouseLeave={this.handleLeave}>{this.state.text} P<span id="beanWrapper">{this.state.width < 750 ? svgMobile : svg}</span>L</h1>
                <nav id="navMain">
                    <Link activeClassName="active" to='/book'>BOOKS</Link>,
                    <Link activeClassName="active" to='/about'>ABOUT</Link>,
                    <Link activeClassName="active" to='/stockings'>STOCKINGS</Link>
                </nav>
                <Link id="cartMain" to='/'>0 ITEMS (0€)</Link>
            </header>
        </>)
    };
}


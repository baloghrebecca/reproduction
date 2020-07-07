import React from "react"
import { Helmet } from "react-helmet"
import '../styles/index.scss'
import Forms from '../components/forms'
import HeaderLandingPageCopy from '../components/headerLandingPageCopy'
import LayoutLandingPage from '../components/layoutLandingPage'
import Books from '../components/booksComponent'
import HeaderMain from '../components/headerMain'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasReachedId: false,
    };
  }

  render() {
    //smooth scroll
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }

    return (<>
      <Helmet>
        <meta charSet="utf-8" />
        <title>POOL Publishing</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <HeaderLandingPageCopy />
      <LayoutLandingPage>
        <div id="filler"></div>
  
      </LayoutLandingPage>
    </>)
  }

}



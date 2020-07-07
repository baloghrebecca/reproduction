import React from "react";
import '../styles/index.scss';
import Layout from '../components/layout';
import AboutComponent from '../components/aboutComponent';
import PageTransition from 'gatsby-plugin-page-transitions';
import HeaderMain from '../components/headerMain'

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (<>
      {this.state.width > 1100 ? <HeaderMain /> : ''}
      <PageTransition
        defaultStyle={{
          transition: 'top 400ms cubic-bezier(0.47, 0, 0.75, 0.72)',
          top: '100%',
          position: 'absolute',
          width: '100%',
        }}
        transitionStyles={{
          entering: { top: '0%' },
          entered: { top: '0%' },
          exiting: { top: '100%' },
        }}
        transitionTime={300}>
        <>
          {this.state.width <= 1100 ? <HeaderMain /> : ''}
          <Layout>
            <AboutComponent />
          </Layout>
        </>
      </PageTransition>
    </>)
  }
}

import React from "react"
import '../styles/index.scss'
import Layout from '../components/layout'
import StockingsComponent from '../components/stockingsComponent'
import HeaderMain from '../components/headerMain'

export default class Stockings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    document.body.style.overflow = "";
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
          <HeaderMain />
        <Layout>
          <StockingsComponent />
        </Layout>
        </>)
  }
}

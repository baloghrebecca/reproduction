import React from "react"
import '../styles/index.scss'
import Layout from '../components/layout'
import Books from '../components/booksComponent'
import HeaderMain from '../components/headerMain'

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      opacity: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.setState({ opacity: 1 })
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
      <div id="booksMenuWrapper" style={{ opacity: this.state.opacity }}>
        <HeaderMain />
      </div>
      <Layout>
        <Books />
      </Layout>
    </>)
  }
}

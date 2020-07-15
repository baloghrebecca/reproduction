import React from "react";
import '../styles/index.scss';
import LayoutNoMargin from '../components/layoutWithoutMarginBottom';
import ProductPage from '../components/product';
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
      <HeaderMain />
      <LayoutNoMargin>
        <ProductPage />
      </LayoutNoMargin>
    </>)
  }
}

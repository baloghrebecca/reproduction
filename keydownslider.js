handleKeyDown = (e) => {
    const widthOfStep = this.state.leftEndOfSlider
    const sliderPositionLeft = this.slider.current.offsetLeft
    this.setState({
      step: widthOfStep
    })

    if (e.keyCode === 39) {
      if (-this.state.currentPosition > this.state.endSlidesRight) {
        this.setState({ currentPosition: this.state.leftEndOfSlider })
        return;
      }
      const position = sliderPositionLeft - widthOfStep
      this.setState({
        currentPosition: position,
        //right end of container
        rightEndOfSlider: this.slider.current.getBoundingClientRect().right
      })
    }
    // console.log('position', this.state.currentPosition, 'left', this.state.leftEndOfSlider, 'right', this.state.endSlidesRight);
    if (e.keyCode === 37) {
      if (this.state.currentPosition > this.state.leftEndOfSlider) {
        this.setState({ currentPosition: this.state.leftEndOfSlider })
        return;
      }
      const position = sliderPositionLeft + widthOfStep
      this.setState({
        currentPosition: position
      })
    }
  }
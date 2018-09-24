import React, { Component } from 'react';


class ClickerMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time: 0,
      isOn: false,
      start: 0,
      stop: 10000,
      mbtn: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }

  startTimer() {

  }

  tick() {
    if (this.state.time <= this.state.stop) {
      this.setState({
        time: Date.now() - this.state.start
      })
    } else {
      this.stopTimer()
    }
  }
  
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
    this.setState({mbtn: true})
  }

  getCount() {
    return this.state.count
  }

  incCount() {
    if (this.state.count === 0) {
      this.setState({
        isOn: true,
        time: this.state.time,
        start: Date.now() - this.state.time
      })
      this.timer = setInterval(() => this.tick(), 1);
    }

    this.setState(prevState => { 
      return {count: prevState.count + 1} 
    })
  }

  render() {
    return (
      <div className="container">
      <p>{this.getCount()}</p>
      <button disabled={this.state.mbtn} onClick={this.incCount.bind(this)}>Click Here</button>
      <h3>timer: {(this.state.time)}</h3>
      </div>
    );
  }
}

export default ClickerMain;

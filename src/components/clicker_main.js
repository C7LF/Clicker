import React, { Component } from 'react';
import Time from 'react-time';
var logo = require('../assets/clicker-logo.png');

class ClickerMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time: new Date(0),
      isOn: false,
      start: 0,
      stop: 10000,
      mbtn: false,
      showResults:false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }


  startTimer() {
    this.setState({isOn:true});
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
    this.setState ({showResults: true})
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

  tryAgain() {
    window.location.reload();
  }

  averageClick() {
    return this.state.count / 10;
  }

  render() {
    return (
      <div>
      <div style={this.state.showResults ? {display: 'none' } : { display: '' }}>
      <p className="time"><Time value={this.state.time} format="s" /></p>
      <button disabled={this.state.mbtn} onClick={this.incCount.bind(this)}></button>
      </div>
        <div className="result" style={this.state.showResults ? {} : { display: 'none' }}>
          <img src={logo} alt={"logo"} />
          <p>{this.averageClick()} <br /><span class="small">clicks per second</span></p>
          <a href="" onClick={this.tryAgain}>Try Again</a>
        </div>
      </div>
    );
  }
}

export default ClickerMain;

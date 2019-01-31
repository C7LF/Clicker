import React, { Component } from 'react';
import Time from 'react-time';
var logo = require('../assets/clicker-logo.png');

class ClickerMain extends Component {
  constructor(props) {
    super(props);
    
    // Set this inital state values.
    this.state = {
      count: 0,
      time: new Date(0),
      isOn: false,
      start: 0,
      stop: 10000,
      mbtn: false,
      showResults:false
    }
    
    // Bind startTimer and stopTimer to stop 'this' event handler from losing context.
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }

  // Function to start the timer. Sets the 'isOn' state to true
  startTimer() {
    this.setState({isOn:true});
  }

  // Function to control time.
  tick() {
    if (this.state.time <= this.state.stop) { // if State time is less than 10 seconds (10000ms) 
      
      // Set the state time to the current time. 
      this.setState({
        time: Date.now() - this.state.start
      })
    } else { // if the time state is greater than or equal to 10 seconds stop the timer
      this.stopTimer()
    }
  }
  
  // Stop timer function
  stopTimer() {
    this.setState({isOn: false}) // Set the isOn state to false.
    clearInterval(this.timer) // clears a timer set with the setInterval() method.
    this.setState({mbtn: true}) // Enables the clicker.
    this.setState({showResults: true}) // Shows the results.
  }


  getCount() {
    return this.state.count // Return the click count.
  }

  // increase count function.
  incCount() {
    if (this.state.count === 0) { // If the count is equal to '0'
      this.setState({
        isOn: true, // set the timer boolean to true, indicating that it is running
        time: this.state.time, // Set time.
        start: Date.now() - this.state.time // Set the start time to the current time.
      })
      this.timer = setInterval(() => this.tick(), 1);
      // Set the interval of the timer, run the tick function every 1 second.
    }

    this.setState(prevState => { // Get the previous state
      return {count: prevState.count + 1} // Add 1 to the previous state of count.
    })
  }

  // Reload the page event.
  tryAgain() {
    window.location.reload();
  }

  // Work out the result of the clicks.
  averageClick() {
    return this.state.count / 10; // The count divided by 10.
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

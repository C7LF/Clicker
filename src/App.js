import React, { Component } from 'react';
import Header from './components/header';
import ClickerMain from './components/clicker_main';
import Timer from './components/timer';
import './App.css';
import Time from 'react-time';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ClickerMain />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
var logo = require('../assets/clicker-logo.png');


class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt={"logo"} />
      </header>
    );
  }
}

export default Header;

import React, { Component } from 'react';
var logo = require('../assets/clicker-logo.png');


class Header extends Component {
  render() {
    return (
        <img src={logo} alt={"logo"} />
    );
  }
}

export default Header;

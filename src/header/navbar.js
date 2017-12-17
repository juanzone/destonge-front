import React, { Component } from 'react';


import Logo from './logo/logo'
import Menu from './menu/menu'
import SliderSlick from './slider/slider'


class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid header">
        <Logo />
        <Menu />
        <SliderSlick />
      </div>
    );
  }
}

export default Navbar

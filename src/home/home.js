import React, { Component } from 'react';

import Slider from '../header/slider/slider'
import Menu from '../header/menu/menu'
import LangContainer from '../lang/lang-container';
import LogoHeader from '../header/logo-header/logo-header'
import HomeContainer from './container-home';

import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const data = this.props.data
    return (
      <div className="container-fluid container-home">
      <Slider />
      <LogoHeader />
      <div className="container">
      <Menu data={data.menu} />
      <LangContainer currentLang={data.lang} />
      </div>
      <HomeContainer data={data} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    data : state.data,
  }
}

export default connect(mapStateToProps)(Home)

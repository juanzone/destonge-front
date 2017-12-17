import React, { Component } from 'react';

import Menu from '../header/menu/menu'
import LogoHeader from '../header/logo-header/logo-header'
import IntroRoomsComponent from './intro-rooms/intro-rooms';
import RoomsListComponent from './rooms-list/rooms-list-container';
import {CSSTransitionGroup} from 'react-transition-group';

import './chambres.css'
import bgImage from '../assets/rooms/bg.jpg';


class ChambresContainer extends Component {

  render() {
    const divStyle = {backgroundImage : 'url(' + bgImage + ')'};
    return (
      <CSSTransitionGroup
      transitionName="chambresAnim"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={800}>
      <div className="container-fluid chambres-container" style={divStyle}>
        <div className="container">
          <LogoHeader/>
          <Menu />
        </div>
      </div>
      <div className="container panel-container">
        <IntroRoomsComponent />
        <RoomsListComponent />
      </div>
      </CSSTransitionGroup>
    );
  }
}

export default ChambresContainer

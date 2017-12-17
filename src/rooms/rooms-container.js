import React, { Component } from 'react';
import LangContainer from '../lang/lang-container';
import LogoHeader from '../header/logo-header/logo-header';
import RoomComponent from './room-item';

import MenuContainer from '../components/menu/menu';


import { connect } from 'react-redux';

import './rooms.css';

class RoomContainer extends Component {
  constructor(){
    super();
  }


  render() {
    const data = this.props.data;
    return (
      <div className="" id="outer-container">
      <MenuContainer />
        <div className="container">
          <LangContainer currentLang={data.lang} />
        </div>
        <div className="room-container" id="page-wrap">
        {data.rooms.map((room, index) => {
          let img = require('../../public/assets/rooms/' + room.background);
          let backgroundStyle = { backgroundImage: 'url(' + img +')' }
          return(
            <RoomComponent style={backgroundStyle} data={room} key={index} />
          )
        })}
        </div>
      </div>
    );
  }

}

function mapStateToProps(state){
  return{
    data : state.data,
  }
}

export default connect(mapStateToProps)(RoomContainer);

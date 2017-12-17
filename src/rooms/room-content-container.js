import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setCurrentRoom} from '../actions/index'
import Slider from 'react-slick';
import RoomContentComponent from './room-content-component'
import MenuContainer from '../components/menu/menu';
import LangContainer from '../lang/lang-container';
import './room-content-container.css'

class RoomContentContainer extends Component {

  componentWillMount(){
    const param = this.props.match.params.slug
    const rooms = this.props.data.rooms;
    rooms.map((room) =>{
      if(room.slug === param){
        this.props.setCurrentRoom(room);
      }
    })
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay : true,
      autoplaySpeed : 7000,
      // fade: true,
      draggable : false
    };
    // let img = require('../../public/assets/rooms/' + room.background);
    let backgroundStyle = { backgroundImage: 'url(https://peach.blender.org/wp-content/uploads/bbb-splash.png?x11217)' };
    if(this.props.room){
      return (
        <div className="room-content-container">
        <MenuContainer />
        <LangContainer currentLang={this.props.data.lang} />
          <Slider {...settings}>
            {this.props.room.images.map((image, index) =>{
              let img = require('../../public/assets/rooms/' + this.props.match.params.slug + '/' + this.props.room.images[index]);
              let backgroundStyle = { backgroundImage: 'url(' + img + ')' };
              return <div className="slider-item" style={backgroundStyle} key={index}></div>
            })}
          </Slider>
          <RoomContentComponent room={this.props.room} text={this.props.data.text}/>
        </div>
      );
    }else{
      return(
        <div></div>
      )
    }
  }

}

function mapStateToProps(state){
  return {
    data : state.data,
    room : state.currentRoom
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setCurrentRoom}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomContentContainer);

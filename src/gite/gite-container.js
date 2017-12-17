import React, { Component } from 'react';
import GiteComponent from './gite-component';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import MenuContainer from '../components/menu/menu';
import LangContainer from '../lang/lang-container';

class GiteContainer extends Component {

  render() {
    if(this.props.data.gite){
      console.log(this.props.data.gite.images);
      return (
        <div className="room-content-container">
        <MenuContainer />
        <LangContainer currentLang={this.props.data.lang} />
          <Slider>
            {this.props.data.gite.images.map((image, index) =>{
              let img = require('../../public/assets/gite/' + this.props.data.gite.images[index]);
              let backgroundStyle = { backgroundImage: 'url(' + img + ')' };
              return <div className="slider-item" style={backgroundStyle} key={index}></div>
            })}
          </Slider>
          <GiteComponent gite={this.props.data.gite} text={this.props.data.text} />
        </div>
      );
    }else{
      return (<div></div>)
    }
  }
}

function mapStateToProps(state){
  return {
    data : state.data
  }
}

export default connect(mapStateToProps)(GiteContainer);

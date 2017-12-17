import React, { Component } from 'react';

import GSAP from 'react-gsap-enhancer'
import {TimelineMax} from 'gsap';
import { Link } from 'react-router-dom';

import bedImg from '../assets/bed.png';
import bathImg from '../assets/bath.png';
import avantageImg from '../assets/avantage.png';
import personImg from '../assets/max.png';

function createAnim({target}){
  var el = target.findAll({name : 'gsap'});
  var ligne = target.findAll({name : 'gsap-1'});
  return new TimelineMax()
    .staggerFrom(el,0.5, {x  : -20 , autoAlpha : 0}, 0.2)
}

class RoomComponent  extends Component {

  componentDidMount() {
    this.jumpAnim = this.addAnimation(createAnim);
    //console.log(this.props.setCurentRoom({data : "test"}));
  }

  handleClick(data) {
    console.log(data);
  }

  render() {
    return (
      <Link to={"/rooms/" + this.props.data.slug}>
      <div className="room-item" style={this.props.style}>
        <div className="room-item-center">
          <div className="room-item-title text-center">
            <h2 name="gsap-1">{this.props.data.name}</h2>
          </div>
          <div className="room-item-attributes">
            <div name="gsap-1" className="row attribute-list equal">
              <div name="gsap" className="col-md-offset-1 col-md-2"><img src={bedImg}/></div>
              <div name="gsap" className="col-md-9">{this.props.data.attributes.bed}</div>
            </div>
            <div name="gsap-1"  className="row attribute-list equal">
              <div name="gsap" className="col-md-offset-1 col-md-2"><img src={bathImg}/></div>
              <div name="gsap" className="col-md-9">{this.props.data.attributes.bath}</div>
            </div>
            <div name="gsap-1"  className="row attribute-list equal">
              <div name="gsap" className="col-md-offset-1 col-md-2 equal"><img src={avantageImg}/></div>
              <div name="gsap" className="col-md-9 equal">{this.props.data.attributes.avantage}</div>
            </div>
            <div  name="gsap-1" className="row attribute-list equal">
              <div name="gsap" className="col-md-offset-1 col-md-2"><img src={personImg}/></div>
              <div name="gsap" className="col-md-9">{this.props.data.attributes.person}</div>
            </div>
          </div>
        </div>
      </div>
      </Link>
    );
  }

}


export default GSAP()(RoomComponent);

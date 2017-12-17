import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { changeSlider } from '../../actions/index'
import SliderItem from './sliderItem'

import './slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class SliderSlick extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.changeSlider();
    console.log("slides", this.props.slides);
  }

  renderImages(){
    if(this.props.slides){
      return this.props.slides.map((slide, i) => {
        return <SliderItem url={slide.url} key={slide.id} id={slide.id} />
      })
    }
  }

  render() {
    return(
      <div className="bg-container">
        {this.renderImages()}
      </div>
    );
  }
}

function mapStateToProps(state){ // va être appelée a chaque fois que le state change.
  return {
    slides : state.changeSlider // this.props.myUsers
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({changeSlider : changeSlider}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderSlick)

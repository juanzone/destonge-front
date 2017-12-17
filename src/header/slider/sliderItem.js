import React, { Component } from 'react';
import TweenMax from 'gsap';

class SliderItem extends Component {

  componentDidMount(){
    const sliderReact = this.refs.sliderReact;
    console.log(sliderReact);
    return TweenMax.to(sliderReact, 30, {scale : 1.1})
  }

  render() {
    const imgUrl = this.props.url;
    const imgId = this.props.id;
    const backgroundStyle = { backgroundImage: 'url(' + imgUrl + ')' }
    return (
      <div className="slider-react" id={imgId} style={backgroundStyle} ref="sliderReact"></div>
    );
  }
}

export default SliderItem

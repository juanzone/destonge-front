import React, { Component } from 'react';
import Weather from './weather/weather';
import TitleComponent from './title-component/title-component';
import TextComponent from './text-component/text-component';
import './home-container.css';


class HomeContainer extends Component {
  render() {
    const data = this.props.data
    return (
      <div className="container-fluid home-container">
        <div className="row">
          <TitleComponent welcome={data.welcome} by={data.by}/>
        </div>
        <div className="row under-row">
          <Weather />
          <TextComponent text={data.homeText}/>
        </div>
      </div>
    );
  }
}

export default HomeContainer

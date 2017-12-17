import React, { Component } from 'react';
import {connect} from 'react-redux'
import MenuContainer from '../components/menu/menu';
import LangContainer from '../lang/lang-container';
import './activites.css'


class ActiviteContainer extends Component {

  render() {
    let img1 = require('../../public/assets/activites/act1.jpg');
    let img2 = require('../../public/assets/activites/act2.jpg');
    let img3 = require('../../public/assets/activites/act3.jpg');
    let backgroundStyle1 = { backgroundImage: 'url(' + img1 +')' }
    let backgroundStyle2 = { backgroundImage: 'url(' + img2 +')' }
    let backgroundStyle3 = { backgroundImage: 'url(' + img3 +')' }
    return (
      <div className="full-container">
      <MenuContainer />
      <LangContainer currentLang={this.props.data.lang} />
        <div className="activite-container" style={backgroundStyle1}>
          <div className="text-center">{this.props.data.activity.txt1}</div>
        </div>
        <div className="activite-container" style={backgroundStyle2}>
          <div className="text-center">{this.props.data.activity.txt2}</div>
        </div>
        <div className="activite-container" style={backgroundStyle3}>
          <div className="text-center">{this.props.data.activity.txt3}</div>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    data : state.data
  }
}

export default connect(mapStateToProps)(ActiviteContainer);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {switchLanguage} from '../actions/index.js';
import './lang.css';

class LangContainer extends Component {

  render() {
    const currentLang = this.props.currentLang
    var otherLang = '';
    if(currentLang == 'fr'){
      otherLang = 'en'
    }else{
      otherLang = 'fr'
    }
    return (
      <div className="lang-container">
        <span className="current-lang">{this.props.currentLang}</span>
        <span className="other-lang" onClick={() => this.props.switchLanguage(otherLang)}>{otherLang}</span>
      </div>
    );
  }

}

function mapStateToProps(state){
  return{
    data : state.data
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({switchLanguage}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(LangContainer);

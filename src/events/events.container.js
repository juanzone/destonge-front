import React, { Component } from 'react';
import {connect} from 'react-redux';
import MenuContainer from '../components/menu/menu';
import LangContainer from '../lang/lang-container';
import './events.css'

class EventContainer extends Component {

  render() {
    return (
      <div className="event-container full-container">
      <MenuContainer />
      <LangContainer currentLang={this.props.data.lang} />
      <div className="soon-text">{this.props.data.text.soon}</div>
      </div>
    );
  }

}

function mapStateToProps(state){
  return{
    data : state.data
  }
}

export default connect(mapStateToProps)(EventContainer);

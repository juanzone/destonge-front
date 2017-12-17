import React, { Component } from 'react';
import {connect} from 'react-redux'
import MenuContainer from '../components/menu/menu';
import LangContainer from '../lang/lang-container';
import DateComponent from './date.component';
import bgImg from '../../public/assets/piscine.jpg';
import {CSSTransitionGroup} from 'react-transition-group'
import './booking.css';

class BookingContainer extends Component {

  constructor(props){
    super(props)
    this.currentComponent = <DateComponent key={1} />;
  }

  componentLoader(){
    var currentComponent = null;
    if(this.props.currentForm){
      switch (this.props.currentForm) {
        case 2:
          this.currentComponent = <div key={this.props.currentForm} className="test"> Salut </div>
          break;
      }
    }
  }

  render() {
    this.componentLoader();
    let backgroundStyle = { backgroundImage: 'url(' + bgImg +')' }
    return (
      <div className="full-container booking-container" style={backgroundStyle}>
        <MenuContainer />
        <LangContainer currentLang={this.props.data.lang} />
        <div className="container content-container">
        <CSSTransitionGroup
        transitionName="translate"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={300}>
          {this.currentComponent}
        </CSSTransitionGroup>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    data : state.data,
    currentForm : state.currentForm
  }
}

export default connect(mapStateToProps)(BookingContainer);

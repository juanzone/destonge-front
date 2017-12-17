import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {CSSTransitionGroup} from 'react-transition-group'
import { loadingSpinner } from './actions/index'

import Loading from './loading/loading'
import Home from './home/home'

import './App.css';

class Layout extends Component {

  componentDidMount(){
    setTimeout(() =>{
      this.props.loadingSpinner();
    }, 5100)
  }

  render() {
    console.log(this.props.data);
    let currentComponent = null;
    if(this.props.loading){
      currentComponent = <Loading key="Loader" />
    }else{
      currentComponent = <Home key="Homepage" />
    }
    return(
      <CSSTransitionGroup
      transitionName="loading"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={800}>
      {currentComponent}
      </CSSTransitionGroup>
    );
  }
}

function mapStateToProps(state){ // va être appelée a chaque fois que le state change.
  return {
    loading : state.loadingSpinner // this.props.myUsers
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({loadingSpinner : loadingSpinner}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

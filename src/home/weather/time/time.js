import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getTime } from '../../../actions/index'


class TimeComponent extends Component {

  componentWillMount(){
    this.props.getTime();
  }

  componentDidMount(){
    setInterval(() =>{
      this.props.getTime()
    },1000)
  }

  render() {
    return (
      <h5>
        {this.props.time}
      </h5>
    );
  }
}

function mapStateToProps(state){
  return{
    time : state.time
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getTime}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeComponent)

import React, { Component } from 'react';
import { DateRange } from 'react-date-range';
import {setDateBooking, changeCurrentForm} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import moment from 'moment'
import 'moment/locale/fr';

class DateComponent extends Component {

  handleChange = (date) => {
    this.props.setDateBooking(date)
  }

  nextStep = () => {
    if(this.props.bookForm){
      if(!this.props.bookForm.startDate || !this.props.bookForm.endDate){
        console.log("error");
      }else{
        console.log("ok");
        this.props.changeCurrentForm(1);
      }
    }else{
      console.log("error");
    }
  }

  sanitizeStartDate(){
    if(this.props.bookForm){
      return moment(this.props.bookForm.startDate).format('dddd, Do MMMM YYYY');
    }
  }
  sanitizeEndDate(){
    if(this.props.bookForm){
      return moment(this.props.bookForm.endDate).format('dddd, Do MMMM YYYY');
    }
  }

  render() {
    return (
      <div className="row">
        <div className=" col-xs-12 date-container text-center">
          <h1> Veuillez selectionner vos dates </h1>
          <div className="col-xs-12 col-md-6 text-right">Du : {this.sanitizeStartDate() }</div>
          <div className="col-xs-12 col-md-6 text-left">Au : {this.sanitizeEndDate() }</div>
        </div>
        <div className="col-xs-12 text-center date-content">
          <DateRange onChange={this.handleChange} lang="en" calendars="1"/>
        </div>
        <div className="col-xs-12 col-md-12 date-content text-center">
          <div className="next-button" onClick={this.nextStep}>Suivant</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    data : state.data,
    bookForm : state.bookForm,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setDateBooking, changeCurrentForm}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DateComponent);

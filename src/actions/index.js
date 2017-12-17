import { dispatch } from 'redux-thunk'
import axios from 'axios'
import moment from 'moment-timezone'
import imageSlider from '../assets/maison.jpg'

export const LOADING_SPINNER = 'LOADING_SPINNER'
export const CHANGE_SLIDER = 'CHANGE_SLIDER'
export const GET_WEATHER = 'GET_WEATHER'
export const GET_TIME = 'GET_TIME'
export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE'
export const CURRENT_LANGUAGE = 'CURRENT_LANGUAGE'
export const SET_CURRENT_ROOM =  "SET_CURRENT_ROOM"
export const SET_DATE_BOOKING =  "SET_DATE_BOOKING"
export const CHANGE_CURRENT_FORM =  "CHANGE_CURRENT_FORM"

export function loadingSpinner(){ //On passe en paramètre les infos de luser sur lequel on a cliqué
  return {
    type : LOADING_SPINNER, // nom de l'action
    payload : false // On passe les données user.
  }
}

export function changeSlider(){
    let images = [
      {'url': imageSlider, 'id' : 'img1'}
    ];
    return {
      type : CHANGE_SLIDER, // nom de l'action
      payload : images // On passe les données user.
    }
}

export function getWeather(){
  const api = 'http://api.openweathermap.org/data/2.5/weather?id=6613679&APPID=1249e00127d43161211826a9ed212c7f&units=metric'
  return function (dispatch){
    axios.get(api)
    .then(function(response){
      dispatch({type: GET_WEATHER, payload : response.data})
    })
  }
}

export function getTime(){
  moment.locale('fr');
  let currentTime = moment().tz("Europe/Brussels").format('dddd HH : mm : ss');
  return{
    type : GET_TIME,
    payload : currentTime
  }
}

export function getCurrentLanguage(current_language){
  return{
    type : CURRENT_LANGUAGE,
    payload : current_language
  }
}

export function switchLanguage(language){
  return {
    type : SWITCH_LANGUAGE,
    payload : language
  }
}

export function setCurrentRoom(room){
  return {
    type : SET_CURRENT_ROOM,
    payload : room
  }
}

export function setDateBooking(date){
  return{
    type : SET_DATE_BOOKING,
    payload : date
  }
}

export function changeCurrentForm(form){
  switch (form) {
    case 1:
      return {type : CHANGE_CURRENT_FORM, payload: 2}
      break;
      case 2:
      return {type : CHANGE_CURRENT_FORM, payload: 2}
      break;
  }
}

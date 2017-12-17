import { SET_DATE_BOOKING } from '../actions/index.js'


export default function(state = null, action){
  switch(action.type){
    case SET_DATE_BOOKING:
      return action.payload; // Retourne les données.
    default:
      return state;
  }
}

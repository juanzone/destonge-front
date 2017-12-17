import { CHANGE_CURRENT_FORM } from '../actions/index.js'

export default function(state = 1, action){
  switch(action.type){
    case CHANGE_CURRENT_FORM:
      return action.payload; // Retourne les données.
    default:
      return state;
  }
}

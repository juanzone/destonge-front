import { CHANGE_SLIDER } from '../actions/index.js'


export default function(state = null, action){
  switch(action.type){
    case CHANGE_SLIDER:
      return action.payload; // Retourne les données.
    default:
      return state;
  }
}

import { LOADING_SPINNER } from '../actions/index.js'


export default function(state = true, action){
  switch(action.type){
    case LOADING_SPINNER:
      return action.payload; // Retourne les données.
    default:
      return state;
  }
}

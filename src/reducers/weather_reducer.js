import { GET_WEATHER } from '../actions/index.js'


export default function(state = null, action){
  switch(action.type){
    case GET_WEATHER:
      return action.payload; // Retourne les données.
    default:
      return state;
  }
}

import { GET_TIME } from '../actions/index.js'


export default function(state = null, action){
  switch(action.type){
    case GET_TIME:
      return action.payload; // Retourne les données.
    default:
      return state;
  }
}

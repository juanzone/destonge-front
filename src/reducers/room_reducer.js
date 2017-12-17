import { SET_CURRENT_ROOM } from '../actions/index.js'


export default function(state = null, action){
  switch(action.type){
    case SET_CURRENT_ROOM:
      return action.payload; // Retourne les données.
    default:
      return state;
  }
}

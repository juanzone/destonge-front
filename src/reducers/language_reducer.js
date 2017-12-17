import { SWITCH_LANGUAGE } from '../actions/index.js';
import getContent from './api-lang';

const initialState = getContent();

export default function(state = initialState, action){
  switch(action.type){
    case SWITCH_LANGUAGE:
      var lang = action.payload;
      return getContent(lang);
    default:
      return state
  }
}

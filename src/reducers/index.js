import { combineReducers } from 'redux'
import loadingSpinner from './loading_reducer'
import changeSlider from './slider_reducer'
import getWeather from './weather_reducer'
import getTime from './time_reducer';
import getData from './language_reducer';
import setCurrentRoom from './room_reducer';
import bookFormDate from './book-form';
import currentForm from './form_reducer';

const rootReducer = combineReducers({
  loadingSpinner : loadingSpinner,
  changeSlider : changeSlider,
  weather : getWeather,
  time : getTime,
  data : getData,
  currentRoom : setCurrentRoom,
  bookForm : bookFormDate,
  currentForm : currentForm
});

export default rootReducer;

import {combineReducers} from 'redux';

import home from './pages/home/reducer';
import login from './pages/login/reducer';
import form from './pages/form/reducer';


const RootReducer = combineReducers({
  home,
  login,
  form
});
export default RootReducer;

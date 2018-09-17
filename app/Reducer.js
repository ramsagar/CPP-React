import {combineReducers} from 'redux';

import home from './screens/home/reducer';
import login from './screens/login/reducer';
import form from './screens/form/reducer';


const RootReducer = combineReducers({
  home,
  login,
  form
});
export default RootReducer;

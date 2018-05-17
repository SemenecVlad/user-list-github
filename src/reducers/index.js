import { combineReducers } from "redux";
// import { reducer as form } from "redux-form";
import fetchListReducer from './fetchListReducer';

const rootReducer = combineReducers({
  list: fetchListReducer,
  // form: form,
});

export default rootReducer;

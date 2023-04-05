import { combineReducers } from "@reduxjs/toolkit";
import userReducer from '../modules/@users/usersSlice';

const appReducers = combineReducers({
   userData : userReducer
});

export default appReducers;
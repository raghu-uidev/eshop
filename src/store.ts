import {configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import appReducers from './common/reducers';
const store = configureStore({
    reducer: appReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
});

export default store;
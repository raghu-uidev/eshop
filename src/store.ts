import {configureStore } from "@reduxjs/toolkit";
import appReducers from './common/reducers';

const store = configureStore({
    reducer: appReducers
});

export default store;
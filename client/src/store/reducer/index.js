import { combineReducers } from "redux";
import loginReducer from "./Login-reducer";
import productReducer from './Product-reducer'
import storeReducer from './Store-reducer'
import userReducer from './User-reducer'
import logReducer from './log-reducer'
import dashboardReducer from './Dashboard-reducer'




export default combineReducers({ 
    loginReducer,
    productReducer,
    storeReducer,
    userReducer,
    logReducer,
    dashboardReducer
});

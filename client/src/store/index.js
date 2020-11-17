import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";

export default createStore(rootReducer, // window.devToolsExtension()
    window.__REDUX_DEVTOOLS_EXTENSION__()
    // composeWithDevTools(
        // other store enhancers if any
    // )
);
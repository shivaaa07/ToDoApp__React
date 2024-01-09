import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
// import { composeWithDevTools } from 'redux-devtools-extension';
import { composeWithDevTools } from '@redux-devtools/extension';

export const Store = createStore(rootReducer, composeWithDevTools( ));
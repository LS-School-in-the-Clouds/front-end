//Functional Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"

//Style Imports
import './style/index.css';
import App from './App';

//Component Imports
import reducer from "./utils/redux/reducers/AuthReducer"

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);


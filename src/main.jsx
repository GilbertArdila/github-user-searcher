import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {userReducer} from './reducers/userReducers';
import {applyMiddleware, compose, legacy_createStore as createStore} from 'redux';


// creating a composedEnhancers to get many enhancers inside to set it into the store

const composeAlt =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(applyMiddleware(thunk));

//creating the store with reducers, initialState and enhsncers
const store = createStore(userReducer,composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(
  //setting globalState into the aplication
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  
)

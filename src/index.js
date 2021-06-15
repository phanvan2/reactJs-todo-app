import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './components/store/reducers'

import "./App.css"; 

const store = createStore( rootReducer) ; 

const el = <h2>Chào mừng bạn đến với react</h2> ; 



ReactDOM.render(el, document.getElementById("root")) ; 

ReactDOM.render(
    <Provider store={store}>
        <TodoApp /> 
    </Provider>
    , document.getElementById("root")) ; 
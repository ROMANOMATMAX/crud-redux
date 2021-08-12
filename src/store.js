import { DEFAULT_EXTENSIONS } from '@babel/core';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
    //Para que no haya problemas cuando se abra el programa en un navegador sin la devtool
    typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;

 
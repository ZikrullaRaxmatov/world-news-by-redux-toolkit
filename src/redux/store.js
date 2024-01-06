// import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import newsReducer from './components/NewsList/newsReducer';
import filterReducer from './components/NewsFilter/filterReducer';
// import { thunk } from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

const stringMiddleware = (stroe) => (next) => (action) => {
    if (typeof action === 'string') {
      return next({ type: action })
    }
    return next(action)
  }
  
  // const enhancer = (createStore) => (...args) => {
  //   const store = createStore(...args)
  //   const oldDispatch = store.dispatch
  //   store.dispatch = (action) => {
  //     if (typeof action === 'string') {
  //       return oldDispatch({ type: action })
  //     }
  //     return oldDispatch(action)
  //   }
  //   return store
  // }
  
export const store = configureStore({
    reducer: {newsReducer, filterReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleware), 
    devTools: process.env.NODE_ENV !== 'production'
})

//   const store = createStore(
//     combineReducers({ filterReducer, newsReducer }),
//     compose(applyMiddleware(thunk, stringMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//     // compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//   )
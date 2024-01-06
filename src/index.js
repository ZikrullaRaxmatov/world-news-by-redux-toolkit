import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import newsReducer from './components/NewsList/newsReducer';
import filterReducer from './components/NewsFilter/filterReducer';
import { thunk } from 'redux-thunk';
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

const store = createStore(
  combineReducers({ filterReducer, newsReducer }),
  compose(applyMiddleware(thunk, stringMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  // compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  </React.StrictMode>
);



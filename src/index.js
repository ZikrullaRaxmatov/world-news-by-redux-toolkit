import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import { combineReducers, compose, createStore } from 'redux';
import newsReducer from './components/NewsList/newsReducer';
import filterReducer from './components/NewsFilter/filterReducer';

const enhancer = (createStore) => (...args) => {
  const store = createStore(...args)
  const oldDispatch = store.dispatch
  store.dispatch = (action) => {
    if (typeof action === 'string') {
      return oldDispatch({type: action})
    }

    return oldDispatch(action)
  }

  return store 
} 

const store = createStore(combineReducers({filterReducer, newsReducer}), compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>
);



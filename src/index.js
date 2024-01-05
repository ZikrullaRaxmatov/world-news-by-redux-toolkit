import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import newsReducer from './components/NewsList/newsReducer';
import filterReducer from './components/NewsFilter/filterReducer';

const store = createStore(combineReducers({newsReducer, filterReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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



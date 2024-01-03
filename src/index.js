import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './redux/Reducer';

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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



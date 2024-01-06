
import newsReducer from '../components/NewsList/newsReducer';
import filterReducer from '../components/NewsFilter/filterReducer';
import { configureStore } from '@reduxjs/toolkit';
import { stringMiddleware } from '../middlewares/stringMiddleware';
  
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
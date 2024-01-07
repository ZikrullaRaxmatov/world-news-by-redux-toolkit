import { createReducer } from "@reduxjs/toolkit";
import { newsDeletd, newsFetched, newsFetching, newsFetchingError, newsPosted } from "../../redux/Actions";

const initialState = {
    news: [],
    newsLoadingStatus: 'Ok',
}

const newsReducer = createReducer(initialState, builder => {
    builder
        .addCase(newsFetching, state => {
            state.newsLoadingStatus = 'Loading'
        })
        .addCase(newsFetched, (state, action) => {
            state.newsLoadingStatus = 'Ok'
            state.news = action.payload
        })
        .addCase(newsFetchingError, state => {
            state.newsLoadingStatus = 'Error'
        })
        .addCase(newsPosted, (state, action) => {
            state.news = state.news.push(action.payload)
        })
        .addCase(newsDeletd, (state, action) => {
            state.news = state.news.filter(s => s.category !== action.payload)
        })
        .addDefaultCase(() => {})
})

// function newsReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'NEWS_FETCHING':
//             return {
//                 ...state,
//                 newsLoadingStatus: 'Loading'
//             }
    
//         case 'NEWS_FETCHED':
//             return {
//                 ...state,
//                 news: action.payload,
//                 newsLoadingStatus: 'Ok'
//             }

//         case 'NEWS_FETCHING_ERROR':
//             return {
//                 ...state,
//                 newsLoadingStatus: 'Error'
//             }

//         case 'NEWS_POSTED':
//             return {
//                 ...state,
//                 news: [...state.news, action.payload],
//             }
        
//         case 'NEWS_DELETED':
//             return {
//                 ...state,
//                 news: state.news.filter(s => s.id !== action.payload),
//             }

//         default:
//             return state;
//     }
// }

export default newsReducer;
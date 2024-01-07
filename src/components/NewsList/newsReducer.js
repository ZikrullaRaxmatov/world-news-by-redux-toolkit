// import { createReducer } from "@reduxjs/toolkit";
// import { newsDeletd, newsFetched, newsFetching, newsFetchingError, newsPosted } from "../../redux/Actions";

// const initialState = {
//     news: [],
//     newsLoadingStatus: 'Ok',
// }

// const newsReducer = createReducer(initialState, builder => {
//     builder
//         .addCase(newsFetching, state => {
//             state.newsLoadingStatus = 'Loading'
//         })
//         .addCase(newsFetched, (state, action) => {
//             state.newsLoadingStatus = 'Ok'
//             state.news = action.payload
//         })
//         .addCase(newsFetchingError, state => {
//             state.newsLoadingStatus = 'Error'
//         })
//         .addCase(newsPosted, (state, action) => {
//             state.news.push(action.payload)
//         })
//         .addCase(newsDeletd, (state, action) => {
//             state.news = state.news.filter(s => s.id !== action.payload)
//         })
//         .addDefaultCase(() => {})
// })

// // const newsReducerWithNativeJS = createReducer(initialState, {
// //     [newsFetching]: state => {
// //         state.newsLoadingStatus = 'Loading'
// //     },
// //     [newsFetched]: (state, action) => {
// //         state.newsLoadingStatus = 'Ok'
// //         state.news = action.payload
// //     },
// //     [newsFetchingError]: state => {
// //         state.newsLoadingStatus = 'Error'
// //     },
// //     [newsPosted]: (state, action) => {
// //         state.news.push(action.payload)
// //     },
// //     [newsDeletd]: (state, action) => {
// //         state.news = state.news.filter(s => s.id !== action.payload)
// //     }
// // }, [], state => state)

// export default newsReducer;
// // export default newsReducerWithNativeJS
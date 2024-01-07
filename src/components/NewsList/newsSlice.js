import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    news: [],
    newsLoadingStatus: 'Ok',
}

const newsSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {
        newsFetching: state => {
            state.newsLoadingStatus = 'Loading'
        },
        newsFetched: (state, action) => {
            state.newsLoadingStatus = 'Ok'
            state.news = action.payload
        },
        newsFetchingError: state => {
            state.newsLoadingStatus = 'Error'
        },
        newsPosted: (state, action) => {
            state.news.push(action.payload)
        },
        newsDeletd: (state, action) => {
            state.news = state.news.filter(s => s.id !== action.payload)
        }
    }
})

export const { newsFetching, newsFetched, newsFetchingError, newsPosted, newsDeletd } = newsSlice.actions
export default newsSlice.reducer

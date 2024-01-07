import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import useHttp from "../../hooks/useHttp"

const initialState = {
    news: [],
    newsLoadingStatus: 'Ok',
}

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async () => {
        const { request } = useHttp()
        return await request('http://localhost:3001/news') 
    }
)

const newsSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {
        newsPosted: (state, action) => {
            state.news.push(action.payload)
        },
        newsDeletd: (state, action) => {
            state.news = state.news.filter(s => s.id !== action.payload)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchNews.pending, state => {
                state.newsLoadingStatus = 'Loading'
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.newsLoadingStatus = 'Ok'
                state.news = action.payload
            })
            .addCase(fetchNews.rejected, state => {
                state.newsLoadingStatus = 'Error'
            })
            .addDefaultCase(() => {})
    }
})

export default newsSlice.reducer
export const { newsFetching, newsFetched, newsFetchingError, newsPosted, newsDeletd } = newsSlice.actions

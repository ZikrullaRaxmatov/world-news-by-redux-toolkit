import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import useHttp from "../../hooks/useHttp"

const initialState = {
    filters: [],
    filterLoadingStatus: 'Ok',
    activeFilter: 'all',
    filteredNews: []
}

export const fetchFilter = createAsyncThunk(
    'filter/fetchFilter',
    async () => {
        const { request } = useHttp()
        return await request('http://localhost:3001/filters')
    }
)

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFilter.pending, state => {
                state.filterLoadingStatus = 'Loading'
            })
            .addCase(fetchFilter.fulfilled, (state, action) => {
                state.filterLoadingStatus = 'Ok'
                state.filters = action.payload
            })
            .addCase(fetchFilter.rejected, state => {
                state.filterLoadingStatus = 'Error'
            })
            .addDefaultCase(() => {})
    }
})

export default filterSlice.reducer
export const { activeFilterChanged } = filterSlice.actions
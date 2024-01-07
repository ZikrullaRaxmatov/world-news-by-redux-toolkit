// import { createReducer } from "@reduxjs/toolkit"
// import { activeFilterChanged, filterFetched, filterFetching, filterFetchingError } from "../../redux/Actions"

// const initialState = {
//     filters: [],
//     filterLoadingStatus: 'Ok',
//     activeFilter: 'all',
//     filteredNews: []
// }

// const filterReducer = createReducer(initialState, builder => {
//     builder
//         .addCase(filterFetching, state => {
//             state.filterLoadingStatus = 'Loading'
//         })
//         .addCase(filterFetched, (state, action) => {
//             state.filterLoadingStatus = 'Ok'
//             state.filters = action.payload
//         })
//         .addCase(filterFetchingError, state => {
//             state.filterLoadingStatus = 'Error'
//         })
//         .addCase(activeFilterChanged, (state, action) => {
//             state.activeFilter = action.payload
//         })
//         .addDefaultCase(() => {})
// })

// export default filterReducer;
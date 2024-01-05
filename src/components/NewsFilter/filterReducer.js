
const initialState = {
    news: [],
    newsLoadingStatus: 'Ok',
    filters: [],
    filterLoadingStatus: 'Ok',
    activeFilter: 'all',
    filteredNews: []
}

function filterReducer(state = initialState, action) {
    switch (action.type) {

        case 'FILTER_FETCHING':
            return {
                ...state,
                filterLoadingStatus: 'Loading'
            }
        
        case 'FILTER_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filterLoadingStatus: 'Ok'
            }
        
        case 'FILTER_FETCHING_ERROR':
            return {
                ...state,
                filterLoadingStatus: 'Error'
            }

        case 'ACTIVE_FILTER_CHANGED':
            return {
                ...state,
                activeFilter: action.payload,
            }

        default:
            return state;
    }
}

export default filterReducer;
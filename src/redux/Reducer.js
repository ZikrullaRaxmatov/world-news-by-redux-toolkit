
const initialState = {
    news: [],
    newsLoadingStatus: 'Ok',
    filters: [],
    filterLoadingStatus: 'Ok',
    activeFilter: 'all',
    filteredNews: []
}

function Reducer(state = initialState, action) {
    switch (action.type) {
        case 'NEWS_FETCHING':
            return {
                ...state,
                newsLoadingStatus: 'Loading'
            }
    
        case 'NEWS_FETCHED':
            return {
                ...state,
                news: action.payload,
                newsLoadingStatus: 'Ok'
            }

        case 'NEWS_FETCHING_ERROR':
            return {
                ...state,
                newsLoadingStatus: 'Error'
            }

        case 'NEWS_POSTED':
            return {
                ...state,
                news: [...state.news, action.payload],
            }
        
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

        case 'NEWS_DELETED':
            return {
                ...state,
                news: state.news.filter(s => s.id !== action.payload),
            }

        default:
            return state;
    }
}

export default Reducer;
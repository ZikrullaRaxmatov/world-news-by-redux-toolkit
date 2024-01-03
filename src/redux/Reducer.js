
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
                filteredNews: state.activeFilter === 'all' ? action.payload : action.payload.filter(s => s.category === state.activeFilter),
                newsLoadingStatus: 'Ok'
            }

        case 'NEWS_FETCHING_ERROR':
            return {
                ...state,
                newsLoadingStatus: 'Error'
            }

        case 'NEWS_POSTED':
            const newNews = [...state.news, action.payload]
            return {
                ...state,
                news: newNews,
                filteredNews: state.activeFilter === 'all' ? newNews : newNews.filter(s => s.category === state.activeFilter)
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
                filteredNews: action.payload === 'all' ? state.news : state.news.filter(s => s.category === action.payload)
            }

        case 'NEWS_DELETED':
            const newnewsList = state.news.filter(s => s.id !== action.payload)
            return {
                ...state,
                news: newnewsList,
                filteredNews: state.activeFilter === 'all' ? newnewsList : newnewsList.filter(s => s.category === state.activeFilter)
            }

        default:
            return state;
    }
}

export default Reducer;
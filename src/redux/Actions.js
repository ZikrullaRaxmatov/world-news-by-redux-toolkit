
export const fetchNews = (request) => (dispatch) => {
    dispatch('NEWS_FETCHING')
        request('http://localhost:3001/news')
            .then(data => dispatch(newsFetched(data)))
            .catch(() => dispatch('NEWS_FETCHING_ERROR'))
}

export const fetchFilter = (request) => (dispatch) => {
    dispatch(filterFetching())
        request('http://localhost:3001/filters')
            .then(data => dispatch(filterFetched(data)))
            .catch(() => filterFetchingError())
}

export const newsFetching = () => {
    return {
        type: 'NEWS_FETCHING'
    }
}

export const newsFetched = (news) => {
    return {
        type: 'NEWS_FETCHED',
        payload: news
    }
}

export const newsFetchingError = () => {
    return {
        type: 'NEWS_FETCHING_ERROR'
    }
}

export const newPostedNews = (newNews) => {
    return {
        type: 'NEWS_POSTED',
        payload: newNews
    }
}

export const filterFetching = () => {
    return {
        type: 'FILTER_FETCHING'
    }
}

export const filterFetched = (filters) => {
    return {
        type: 'FILTER_FETCHED',
        payload: filters
    }
}

export const filterFetchingError = () => {
    return {
        type: 'FILTER_FETCHING_ERROR',
    }
}

export const activeFilterChanged = (filter) => {
    return {
        type: 'ACTIVE_FILTER_CHANGED', 
        payload: filter
    }
}

export const newsDeletd = (id) => {
    return {
        type: 'NEWS_DELETED',
        payload: id
    }
}
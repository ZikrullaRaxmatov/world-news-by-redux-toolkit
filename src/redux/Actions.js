import { createAction } from "@reduxjs/toolkit"

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

export const newsFetching = createAction('NEWS_FETCHING')
export const newsFetched = createAction('NEWS_FETCHED')
export const newsFetchingError = createAction('NEWS_FETCHING_ERROR')
export const newsPosted = createAction('NEWS_POSTED')
export const newsDeletd = createAction('NEWS_DELETED')

export const filterFetching = createAction('FILTER_FETCHING')
export const filterFetched = createAction('FILTER_FETCHED')
export const filterFetchingError = createAction('FILTER_FETCHING_ERROR')
export const activeFilterChanged = createAction('ACTIVE_FILTER_CHANGED')


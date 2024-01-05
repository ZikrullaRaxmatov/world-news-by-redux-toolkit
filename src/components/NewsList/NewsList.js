import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsDeletd, newsFetched } from "../../redux/Actions";
import useHttp from "../../hooks/useHttp";
import Loading from "../Loading";
import Error from "../Error";
import NewsListItem from "../NewsListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { createSelector } from "reselect";
import './newsList.css'

function NewsList() {

    const filteredNewsSelected = createSelector(
        (state) => state.filterReducer.activeFilter,
        (state) => state.newsReducer.news,
        ( filtered, news) => {
            if (filtered === 'all') {
                return news
            } else {
                return news.filter(s => s.category === filtered)
            }
        }
    )

    const filteredNews = useSelector(filteredNewsSelected)
    const filterLoadingStatus = useSelector(state => state.filterLoadingStatus)
    const dispatch = useDispatch()
    const { request } = useHttp()

    useEffect(() => {
        dispatch('NEWS_FETCHING')
        request('http://localhost:3001/news')
            .then(data => dispatch(newsFetched(data)))
            .catch(() => dispatch('NEWS_FETCHING_ERROR'))

        // eslint-disable-next-line
    }, [])

    const onDelete = useCallback((id) => {
        request(`http://localhost:3001/news/${id}`, 'DELETE')
            .then(data => console.log(data))
            .then(dispatch(newsDeletd(id)))
            .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [])

    if (filterLoadingStatus === 'Loading...') {
        return <Loading />
    } else if (filterLoadingStatus === 'Error') {
        return <Error />
    }

    const renderNewsList = (arr) => {
        if (arr.length === 0) {
            return <CSSTransition timeout={500} classNames="item" >
                <h2 className="text-center mt-5">News does not exist</h2>
            </CSSTransition>
        }

        return arr.map(item => {
            return (
                <CSSTransition key={item.id} timeout={500} classNames="item" >
                    <NewsListItem onDelete={() => onDelete(item.id)}  {...item} />
                </CSSTransition>
            )
        }).reverse()
    }

    const element = renderNewsList(filteredNews)

    return (
        <TransitionGroup component='ul' >
            {element}
        </TransitionGroup>
    );
}

export default NewsList;
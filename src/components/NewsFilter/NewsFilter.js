import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";
import { useEffect } from "react";
import { filterFetched, filterFetching, filterFetchingError, activeFilterChanged } from "../../redux/Actions";
import Loading from "../Loading";
import Error from "../Error";
import classNames from "classnames";


function NewsFilter(props) {
    const { filters, filterLoadingStatus, activeFilter } = useSelector(state => state)
    const dispatch = useDispatch()
    const {request } = useHttp()

    useEffect(() => {
        dispatch(filterFetching())
        request('http://localhost:3001/filters')
            .then(data => dispatch(filterFetched(data)))
            .catch(() => filterFetchingError())
        // eslint-disable-next-line
    }, [])

    if (filterLoadingStatus === 'Loading') {
        return <Loading />
    } else if(filterLoadingStatus === 'Error') {
        return <Error />
    }

    const renderFilters = (arr) => {
        if(arr.length === 0){
            return <h5 className="text-center mt-5"> Filter not found! </h5>
        }

        return arr.map(({name, className, label}) => {
            const btnClasses = classNames('btn', className, {
                'active': name === activeFilter
            })

            return (
                <button key={name} id={name} className={btnClasses} onClick={() => dispatch(activeFilterChanged(name))} >
                    {label}
                </button>
            )
        })
    }

    const element = renderFilters(filters)

    return (
        <div className="card bg-transparent p-3 mt-3">
            <label className="form-label text-white fs-4" >Filter by category</label>
            <div className="button-group text-center">
                {element}
            </div>
        </div>
    );
}

export default NewsFilter;
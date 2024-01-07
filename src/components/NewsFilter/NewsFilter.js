import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFilter, activeFilterChanged } from "./filterSlice";
import Loading from "../Loading";
import Error from "../Error";
import classNames from "classnames";


function NewsFilter(props) {
    const { filters, filterLoadingStatus, activeFilter } = useSelector(state => state.filterReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilter())
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
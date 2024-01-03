import useHttp from "../hooks/useHttp";
import { useDispatch } from "react-redux";
import { newsFetched, newsFetchingError } from "../redux/Actions";

function RefreshDB() {

    const { request } = useHttp()
    const dispatch = useDispatch()

    const refreshDB = () => {
        request('http://localhost:3001/news')
            .then(data => dispatch(newsFetched(data)))
            .catch(dispatch(newsFetchingError()))
    }

    return { refreshDB }
}

export default RefreshDB;
import { useState } from "react";
import useHttp from '../hooks/useHttp'
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { newsPosted } from "../redux/Actions";


function AddNewsForm() {

    const { request } = useHttp()
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const { filters, filterLoadingStatus } = useSelector(state => state.filterReducer)

    const createNewNewsHandle = (e) => {
        // e.preventDefault()
        const newNews = {
            id: v4(),
            name: title,
            description: description,
            category: category
        }
        request('http://localhost:3001/news', 'POST', JSON.stringify(newNews))
            .then(res => console.log(res))
            .then(dispatch(newsPosted(newNews)))
            .catch(err => console.log(err))

        setTitle('')
        setDescription('')
        setCategory('')
    }

    const renderFilter = (filters, status) => {
        if (status === 'Loading') {
            return <option>Loading option</option>
        } else if (status === 'Error') {
            return <option>Error option</option>
        }

        if (filters && filters.length > 0) {
            return filters.map(({ name, label }) => {
                // eslint-disable-next-line
                if (name === 'all') return
                return <option key={name} value={name} >{label}</option>
            })
        }
    }

    return (
        <form className="card bg-transparent p-3" >
            <div>
                <label htmlFor="#title" className="form-label text-white fs-4" >Name of title</label>
                <input
                    required
                    type="text"
                    placeholder="Input title..."
                    name="title"
                    id="#title"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

            </div>
            <div className="mt-3">
                <label htmlFor="#description" className="form-label text-white fs-4" >Description</label>
                <textarea
                    required
                    type="text"
                    placeholder="Input description..."
                    name="description"
                    id="#description"
                    className="form-control"
                    style={{ height: "100px" }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="mt-3">
                <label htmlFor="#category" className="form-label text-white fs-4" >Choose type of news</label>
                <select
                    required
                    type='select'
                    className="form-select"
                    name="category"
                    id="#category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option >Category of news</option>
                    {renderFilter(filters, filterLoadingStatus)}
                </select>
            </div>
            <div className="d-grid mt-3">
                <button type="button" className="btn btn-outline-primary " onClick={() => createNewNewsHandle()}>Submit</button>
            </div>
        </form>
    );
}

export default AddNewsForm;

// import axios from 'axios';

// import { useDispatch } from "react-redux";
// import useHttp from "../hooks/useHttp";
// import { newsFetchingError } from "../redux/Actions";
// import axios from "axios";

function NewsListItem({id, name, description, category, onDelete }) {

    // const request = useHttp()
    // const dispatch = useDispatch()


    // const deleteItem = (id) => {
    //     axios.delete(`http://localhost:3001/news/${id}`)
    //         .then(res => console.log(res))
    //         .catch(newsFetchingError())
    // }

    // const onDelete = (id) => {
    //     request(`http://localhost:3001/news/${id}`, 'DELETE')
    //         .then(res => console.log(res))
    //         .then(dispatch(newsFetchingError()))    
    // }

    let borderClassName = '';
    let bgImageClassName = ''
    let bgColor = ''
    let textColorClassName = ''

    switch (category) {
        case 'Breaking news':
            borderClassName = 'border border-danger'
            textColorClassName = 'text-danger'
            bgColor = 'bg-danger'
            bgImageClassName = 'breakingNews.jpg'
            break

        case 'International news':
            borderClassName = 'border border-warning'
            textColorClassName = 'text-warning'
            bgColor = 'bg-warning'
            bgImageClassName = 'internationalNews.jpg'
            break

        case 'World news':
            borderClassName = 'border border-success'
            textColorClassName = 'text-success'
            bgColor = 'bg-success'
            bgImageClassName = 'worldNews.jpg'
            break

        case 'Sport news':
            borderClassName = 'border border-primary'
            textColorClassName = 'text-primary'
            bgColor = 'bg-primary'
            bgImageClassName = 'sportNews.jpg'
            break

        default:
            borderClassName = 'border border-dark'
            // eslint-disable-next-line
            textColorClassName = 'text-dark'
            bgColor = 'bg-dark'
            // eslint-disable-next-line
            bgImageClassName = 'news.jpg'
    }

    const randomTime = () => {
        return Math.floor(Math.random() * (9-1))+1
    }

   
    return (
        <li className={`card text-center mb-4 ${borderClassName}`}>
            <div className="card-body" style={{ minHeight: "200px" }} >
                <h4 className="card-title mt-3">{name}</h4>
                <p className="card-text ">{description}</p>
                <i className={`${textColorClassName}`} >{category}</i>
                <p className="card-text text-muted"><small>{`Last updated ${randomTime()} mins ago`}</small></p>
            </div>
            {/* <img src={require(`../assets/${bgImageClassName}`)} className="card-img" style={{ maxHeight: "250px" }} alt="newsImg" /> */}
            {/* <div className="card-img-overlay" >
                <h5 className="card-title text-white mt-3">{name}</h5>
                <p className="card-text text-white">{description}</p>
                <p className="card-text text-danger"><small>{`Last updated ${randomTime()} mins ago`}</small></p>
            </div> */}
            <span className={`position-absolute top-0 start-100 translate-middle badge ${borderClassName} ${bgColor} rounded-circle p-2`}>
                <button type='button' className='btn-close' aria-label='Close' onClick={onDelete}> </button>
            </span>
        </li>
    );
}

export default NewsListItem;
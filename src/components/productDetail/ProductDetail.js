import './productDetail.css';
import React from 'react'
import {Link} from "react-router-dom";

const ProductDetail = ({list}) => {
    const[movie,setMovie]=React.useState(null)
    React.useEffect(()=>{
        let id = window.location.href.split('movies/:')[1]
        if(list){
            var found = list.find(item=>item.imdbID.indexOf(id) !== -1);
        }
        setMovie(found)


    },[])
    return (
        <div>
            <div className={"prodDetail"}>
                <button className={'link'}><Link to="/favorites">Link to favorite</Link></button>
                <button className={'link'}><Link to="/movies">Link to movies</Link></button>
            </div>

            {movie &&
            <div>
                <div>{movie.Title}</div>
                <img src={movie.Poster} alt="" style={{width:"300px"}}/>

            </div>
            }
        </div>

    );
}
export default ProductDetail;

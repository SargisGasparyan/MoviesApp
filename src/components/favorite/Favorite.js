import './favorite.css';
import React,{useContext} from 'react'
import  {Context} from "../../CounterContext";
import {Link} from "react-router-dom";
import './favorite.css'

const Favorite = () => {
    const{movies}=useContext(Context)
    return (
        <div>
            <button className={'link'}><Link to="/movies">Link to movies</Link></button>
            <p>Your favorite list</p>

            {JSON.parse(movies).map((card,index)=>
                <Link to={`/movies/:${card.Id}`}>
                    <div className={'favoriteItem'} key={index}>
                    <img src={card.Image} alt=""/>
                    <p>{card.Title}</p>

                </div>
                </Link>
            )}
        </div>

    );
}
export default Favorite;

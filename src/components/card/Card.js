import './card.css';
import React,{useContext} from 'react'
import {Context} from "../../CounterContext";
import {Link} from 'react-router-dom'

const Card = ({card,favorites}) => {
    const{incMeth,decMeth}=useContext(Context)
    return (
        <div className={'card'}>
            <Link to={`/movies/:${card.imdbID}`} >
            <img src={card.Poster} alt=""/>
            </Link>
            <p>{card.Title}</p>
                {favorites === true ?
                    <button className={'btnToFavprite'} onClick={() => {
                        window.location.reload()
                        incMeth({Title: card.Title, Image: card.Poster, Id: card.imdbID})
                    }}>Add favorite</button> :
                    <button className={'btnFromFavprite'} onClick={() => {
                        window.location.reload()
                        decMeth(card.Title)
                    }}>Remove favorite</button>}

        </div>
    );
}
export default Card;

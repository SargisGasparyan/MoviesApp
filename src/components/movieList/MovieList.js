import './movieList.css';
import React,{useContext} from 'react'
import {Context} from "../../CounterContext";
import Card from "../card/Card";
import {Link} from "react-router-dom";
import {CircularProgress} from '@material-ui/core';


const MovieList = ({setData}) => {
    const [search,setSearch]=React.useState('')
    const [query,setQuery]=React.useState('all')
    const [movieList,setMovieList]=React.useState([])
    const [arrId,setArrId]=React.useState(null)
    const [loading,setLoading]=React.useState(null)


    const{movies}=useContext(Context)


    React.useEffect(()=>{
        getRecipes()
    },[query])

    React.useEffect(()=>{
        let arr2=[]
        JSON.parse(movies).map(item=>arr2.push(item["Id"]))
        setArrId(arr2)
    },[])

    const updateSearch=(ev)=>{
        ev.target.value.toString().length>=3 && setLoading(true)
        setSearch(ev.target.value)
        setQuery(ev.target.value)
    }

    const getRecipes=async()=>{
        const response = await fetch(
            `http://www.omdbapi.com/?apikey=c05bc1ef&s=${query}`
        )

        const data = await response.json()
        data.Search && setMovieList(data.Search)
        setTimeout(()=>setLoading(false),1000)
        setData(data.Search)
    }
    return (
        <div>
            <button className={'link'}><Link to="/favorites">Link to favorite</Link></button>
            <p>Your movies list</p>
            <form  className='search-form'>
                <input className='search-bar' type='text' value={search} onChange={updateSearch} />
            </form>
<div>
            {loading?<CircularProgress size={90} className="G-full-center" color="gray"/>:movieList.map((card,index)=>
                arrId && arrId.find(item=>item.indexOf(card.imdbID) !== -1) ?
                    <div key={index}>
                        <Card card={card} favorites={false}/>
                    </div>:
                    <div key={index}>
                        <Card card={card}  favorites={true} />
                    </div>

            )}
</div>
        </div>

    );
}
export default MovieList;

import './App.css';
import Recipe from './Recipe'
import React,{useEffect,useState} from 'react'

const App=()=> {

const APP_ID='5d1594df'
const APP_KEY='a57f98980993bce395f03d292be1a7d8'

const [search,setSearch]=useState('')
const [query,setQuery]=useState('chicken')
const [recipes,setRecipes]=useState([])

useEffect(()=>{
  getRecipes()
},[query])


const updateSearch=(ev)=>{
  setSearch(ev.target.value)
}
 

const getSearch=(ev)=>{
  ev.preventDefault()
  setQuery(search)
}


const getRecipes=async()=>{
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )

  const data = await response.json()
  setRecipes(data.hits)
  console.log(data.hits)
}

  return (
    <div className="App">
    <p>Your Recipe</p>
    
      <form  className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-botton' type='submit' onClick={getSearch}>Search</button>
      </form>
      {recipes.map((recipe)=>
       <Recipe key={Math.random()} title={recipe.recipe.label} calories={recipe.recipe.calories}
         image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}
       />
      )}
    </div>
  );
}
export default App;

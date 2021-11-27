import './App.css';
import React from 'react'
import ContextProvider from "./CounterContext";
import Favorite from "./components/favorite/Favorite";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MovieList from "./components/movieList/MovieList";
import ProductDetail from "./components/productDetail/ProductDetail";


const App=()=> {
  const[list,setList]=React.useState(null)

  return (
      <div className="App">
        <ContextProvider>
          <Router>
            <Switch>
              <Route path="/" exact={true}>
                <MovieList setData={(val)=>setList(val)}/>
              </Route>
              <Route path="/movies" exact={true}>
                <MovieList setData={(val)=>setList(val)}/>
              </Route>
              <Route path="/movies/:id" >
                <ProductDetail list={list}/>
              </Route>
              <Route path="/favorites">
                <Favorite/>
              </Route>
            </Switch>
          </Router>


        </ContextProvider>
      </div>
  );
}
export default App;

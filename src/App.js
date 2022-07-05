import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import "./App.css";
import ListaFilme from "./components/ListaFilme";

function App() {
  const [movieList, setMovieList] = useState ([]);


  useEffect(() =>{
    const LoadAll = async () =>{
      let Lista = await Tmdb.getHomeList();
      setMovieList(Lista);
    }

    LoadAll();
  },[]);
  return (

  <div className="mainpage">
    <header>
      <h1>Teste</h1>
    </header>
    <section className="listas">
      {movieList.map((item,key)=>(
     <ListaFilme key={key} title ={item.title} items={item.items}></ListaFilme>
      ))}
    </section>
  </div>
  );
}

export default App;
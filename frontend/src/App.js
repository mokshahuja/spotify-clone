import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import AppHeader from "./components/AppHeader";
import Row from "./components/Row";
import Axios from "axios";
// import { useState } from "react";

function App() {

  const [genres, setGenres] = useState([]);

  useEffect(async () => {
    const promise = await Axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=02e1cbd849b17d1d2c35dcffede49fa3&language=en-US')
    console.log(promise.data.genres);
    setGenres(promise.data.genres);
  },[]);

  return (
    <div className="app">
       
       <Sidebar />

      <div className="app__body">
        <AppHeader />

        <div className="app__movieRows">
          {genres.map(genre => (
            <Row title={genre.name} id={genre.id}/>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default App;

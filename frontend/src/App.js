import "./App.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import axios from "axios";
import Note from "./Note";
import { useEffect, useState } from "react";
// import { useState } from "react";

function App() {
  // const notClicked = "sidebar__icon", onClicked="sidebar__iconClicked";
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      setNotes(...notes, response.data);
    });
  }, []);
  console.log("render", notes.length, "notes");
  console.log(notes);
  return (
    <div className="app">
      <div className="app__sidebar">
        <div className="sidebar__logo">
          <img
            src="https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png"
            alt="Spotify Logo"
            width="60px"
          />
          <div className="sidebar__logoName">Spotify</div>
        </div>
        <div className="sidebar__options">
          <div className="sidebar__icon">
            <div>
              <HomeIcon color="secondary" fontSize="large" />
            </div>
            <div className="sidebar__iconText">Home</div>
          </div>
          <div className="sidebar__icon">
            <div>
              <SearchIcon color="secondary" fontSize="large" />
            </div>
            <div className="sidebar__iconText">Search</div>
          </div>
          <div className="sidebar__icon">
            <div>
              <QueueMusicIcon color="secondary" fontSize="large" />
            </div>
            <div className="sidebar__iconText">your Library</div>
          </div>
        </div>
      </div>

      <div className="app__body">
        <h1>hello rishi</h1>
        {notes.map((note) => 
          <Note notes={note} key={note.id}/>
        )}
      </div>
    </div>
  );
}

export default App;

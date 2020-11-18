import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import './Sidebar.css';

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;

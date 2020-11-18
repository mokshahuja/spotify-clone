import { Button } from "@material-ui/core";
import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./AppHeader.css";

const AppHeader = () => {
  return (
    <div className="app__header">
      <div className="arrow__buttons">
        <button>
          <ArrowBackIosIcon color="secondary" />
        </button>
        <button>
          <ArrowForwardIosIcon color="secondary" />
        </button>
      </div>
      <div className="auth__buttons">
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
    </div>
  );
};

export default AppHeader;

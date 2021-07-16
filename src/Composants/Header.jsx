import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";



export const Header = () => {
  return (
    <>
      
      <div >
        <AppBar position="static">
          <Toolbar>
            
              <ul className="itemsHeader">
                <Link to="/">
                  <li className="nav-links">Home</li>
                </Link>
                <Link to="./Favoris">
                  <li className="nav-links">Favoris</li>
                </Link>
              </ul>
              
            
            <Typography variant="h4">AlloMovie</Typography>
          </Toolbar>
        </AppBar>
      </div>
       
    </>
  );
};

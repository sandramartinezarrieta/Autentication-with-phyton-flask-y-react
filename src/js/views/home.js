import React from "react";
import {Planets} from "../component/planets.jsx";
import {Characters} from "../component/character.jsx";
import { Vehicles } from "../component/vehicles.jsx";

import "../../styles/home.css";

export const Home = () => {
  
  return(
  <div className="bg-black">
    
    <div>
    <h1  className="text-danger"> Characters</h1>
    <Characters/>
    <br />
    <h1 className="text-danger"> Planets </h1>
    <Planets/>

    <h1 className="text-danger"> Vehicles </h1>
    <Vehicles/>
    
    </div>
  </div>
  )
  };

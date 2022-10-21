import React, {useContext} from "react";
import {Planets} from "../component/planets.jsx";
import {Characters} from "../component/character.jsx";
import { Vehicles } from "../component/vehicles.jsx";
import { Login } from "../component/login.jsx";
import { Context } from "../store/appContext.js";


import "../../styles/home.css";

export const Home = () => {

  const { store} = useContext(Context)
  let auth = store.auth
  return(
  <div className="bg-black">
    
    <div>
    {!auth ?<h1  className="text-danger"> Login</h1>: null}
    {!auth ?<Login />: null}
    <h1  className="text-danger"> Characters</h1>
    {auth ?<Characters/>: null}
    <br />
    <h1 className="text-danger"> Planets </h1>
    {auth ?<Planets/>: null}
    <h1 className="text-danger"> Vehicles </h1>
    {auth ?<Vehicles/>: null}
    </div>
  </div>
  )
  };

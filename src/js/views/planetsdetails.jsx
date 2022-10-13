import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

import "../../styles/home.css";

// Creacion del componente que se va a mostrar al acceder a este archivo

export const PlanetDetails = () => {
  const { store, actions } = useContext(Context)
 
  const params = useParams();
  console.log(useParams());
  
  
  useEffect(() => {
    actions.obtainEveryPlanet(params.theid);
  }, []);
  console.log(store.everyplanet);
  return (
    <div className="d-flex justify-content-center">

      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                "https://starwars-visualguide.com/assets/img/planets/" +
                params.theid +
                ".jpg"
              }
              className="img-fluid rounded-start"
              alt={store.everyplanet.name}
            />
          </div>
          
          <div className="col-md-8 ">
            <div className="card-body">
              <h5 className="card-title text-center">
              {store.everyplanet.name}
              </h5>
              <p className="card-text text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non
                temporibus distinctio! Doloremque voluptates quibusdam voluptate
                deleniti eligendi ullam inventore nisi quo obcaecati, ipsam iure
                cupiditate error, reiciendis culpa eius?
              </p>
            </div>
          </div>
          <div className="card-footer bg-transparent border-danger text-danger d-flex justify-content-around">
            <h6 className="d-flex"> Gender: <br />{store.everyplanet.name}</h6>
            <h6 className="d-flex"> Eye Color: <br />{store.everyplanet.climate}</h6>
            <h6 className="d-flex"> Hair Color: <br />{store.everyplanet.population}</h6>
            <h6 className="d-flex"> Birth year: <br />{store.everyplanet.orbital_period}</h6>  
            <h6 className="d-flex"> Birth year: <br />{store.everyplanet.rotation_period}</h6> 
            <h6 className="d-flex"> Birth year: <br />{store.everyplanet.diameter}</h6>           
          </div>
        </div>
      </div>
    </div>
  );
};
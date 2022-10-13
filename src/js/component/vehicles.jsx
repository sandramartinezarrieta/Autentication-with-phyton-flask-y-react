import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Vehicles = () => {
  const { store, actions } = useContext(Context);
  console.log(store.vehicles);

  return (
    <div>
        
      <div className="card-group">
        <div className="d-flex flex-row overflow-scroll">
          {store.vehicles.map((item, index) => (
            <div
              className="card"
              key={index}
              style={{
                width: "15rem",
                height: "35em",
                flex: "none",
                margin: "10px",
                borderRadius: "10px",
              }}
            >
              <img
                src={
                  "https://starwars-visualguide.com/assets/img/planets/" +
                  (index + 1) +
                  ".jpg"
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Modelo: {item.model}</p>
                <p className="card-text">Costo: {item.cost_in_credits}</p>
                <Link type="Button" to={"/vehiclesdetails/"+(index+1)} className="btn btn-primary">Learn more!</Link>
    <button type="Button" onClick={()=>actions.setName(item.name)}  className="btn btn-primary">❤</button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

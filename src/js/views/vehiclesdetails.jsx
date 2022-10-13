import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

import "../../styles/home.css";

// Creacion del componente que se va a mostrar al acceder a este archivo

export const VehiclesDetails = () => {
  const { store, actions } = useContext(Context)
 
  const params = useParams();
  console.log(useParams());
  
  
  useEffect(() => {
    actions.obtainEveryVehicle(params.theid);
  }, []);
  console.log(store.everyvehicle);
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
              alt={store.everyvehicle.name}
            />
          </div>
          
          <div className="col-md-8 ">
            <div className="card-body">
              <h5 className="card-title text-center">
              {store.everyvehicle.name}
              </h5>
              <p className="card-text text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non
                temporibus distinctio! Doloremque voluptates quibusdam voluptate
                deleniti eligendi ullam inventore nisi quo obcaecati, ipsam iure
                cupiditate error, reiciendis culpa eius?
              </p>
            </div>
          </div>
          <div className="card-footer bg-transparent border-danger text-danger d-flex justify-content-between">
            <h6 className="d-flex"> Gender: <br />{store.everyvehicle.name}</h6>
            <h6 className="d-flex"> Model: <br />{store.everyvehicle.model}</h6>
            <h6 className="d-flex"> Costo en creditos: <br />{store.everyvehicle.cost_in_credits}</h6>
            <h6 className="d-flex"> Capacidad de carga: <br />{store.everyvehicle.cargo_capacity}</h6>  
            <h6 className="d-flex"> Clase de vehiculo: <br />{store.everyvehicle.vehicle_class}</h6> 
            <h6 className="d-flex"> Velocidad maxima en atmosfera: <br />{store.everyvehicle.max_atmosphering_speed}</h6>           
          </div>
        </div>
      </div>
    </div>
  );
};
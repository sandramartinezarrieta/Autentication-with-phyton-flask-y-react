import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


import "../../styles/home.css";

export const Characters = () => {
  const { store, actions } = useContext(Context);
console.log(store.character);
// useEffect(() => {
//   actions.setName()
// }, []) USAR ESTE HOOK ACA ES ERRADO PORQUE NO NECESITAMOS QUE LA PAGINA CARGE ESTA INFORMACION CUANDO SE CARGA
// SOLO LA NECESITO CUANDO SE HACE CLICK

  return (
    <div>
      <div className="card-group" >
      <div className="d-flex flex-row overflow-scroll">
      {store.character.map((item,index)=> 
      <div className="card" key= {index} style={{width: "17rem",height:"37em", flex: "none", margin: "10px", borderRadius: "10px"}}>
  <img src={"https://starwars-visualguide.com/assets/img/characters/"+(index+1)+".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Gender: {item.gender}</p>
    <p className="card-text">Eye-Color: {item.eye_color}</p>
    <p className="card-text">Hair-Color: {item.hair_color}</p>
    {/* el link me trae la ruta de characterdetail sumandole el index que se va a ver reflejado en el theid de la ruta guardada en layout */}
    <Link type="Button" to={"/characterdetails/"+(index+1)} className="btn btn-primary">Learn more!</Link>
    <button type="Button" onClick={()=>actions.setName(item.name)} className="btn btn-primary">❤</button>
  </div>
  </div>

      )}
      </div>
      </div>
    </div>
  );
};

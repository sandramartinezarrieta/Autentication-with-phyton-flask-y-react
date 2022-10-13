import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

import "../../styles/home.css";

// Creacion del componente que se va a mostrar al acceder a este archivo

export const CharacterDetails = () => {
  const { store, actions } = useContext(Context);
  // useParams me trae el numero que se ha guardado en la ruta ACTUAL
  // Esto quiere decir que desde el archivo character me dan el parametro(index+1=theid) que va a pasar a la ruta(/characterdetails/:theid) y al entrar en este archivo,
  // tengo un numero en la ruta guardado (useParams()=theid)
  const params = useParams();
  // Al hacer un console.log de Params va a mostrar  un objeto osea:{elnombredelaruta:(el numero que me traje e index+1)} EJEMPLO:{theid:1}
  console.log(useParams());
  // Usar useEfect para traer la accion guardada en flux para obtener la api,
  //  esta funcion me trae al api, y al usar como parametro params.theid (pasando el numero que traigo de character) EJEMPLO : en caso de que parmas.theid sea igua a 1, seria: actions.obtEveryChar(1)
  // Al ejecutar esta funcion, me guarda en el store, en un array toda la informacion del api
  // para conseguir la informacion, tendre que entrar en el store, en el objeto donde se guarda(en este caso es en store.everyCharacter)
  useEffect(() => {
    actions.obtEveryChar(params.theid);
  }, []);
  console.log(store.everyCharacter);
  return (
    <div className="d-flex justify-content-center">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                "https://starwars-visualguide.com/assets/img/characters/" +
                params.theid +
                ".jpg"
              }
              className="img-fluid rounded-start"
              alt={store.everyCharacter.name}
            />
          </div>
          
          <div className="col-md-8 ">
            <div className="card-body">
              <h5 className="card-title text-center">
                {store.everyCharacter.name}
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
            <h6 className="d-flex"> Gender: <br />{store.everyCharacter.gender}</h6>
            <h6 className="d-flex"> Eye Color: <br />{store.everyCharacter.eye_color}</h6>
            <h6 className="d-flex"> Hair Color: <br />{store.everyCharacter.hair_color}</h6>
            <h6 className="d-flex"> Birth year: <br />{store.everyCharacter.birth_year}</h6>            
          </div>
        </div>
      </div>
    </div>
  );
};

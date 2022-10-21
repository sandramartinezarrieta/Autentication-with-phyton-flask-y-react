import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store.auth);
let auth = store.auth
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png"
          style={{ width: "60px" }}
        ></img>
      </Link>
	  <div className="dropdown">
	  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
  {store.favorites.map((item, index) => (
                <li className="dropdown-item" key={index}>
                  {item}
				  <button type="button" onClick={()=>actions.removefavorito(item)} className="btn btn-primary">Eliminar</button>
                </li>
				
              ))}
  </ul>
  
  {auth ?<button type="button" class="btn btn-outline-dark" onClick={()=>actions.logout()}>Logout:QUE LA FUERZA TE ACOMPAÑE</button>: null}
</div>
      
    </nav>
  );
};

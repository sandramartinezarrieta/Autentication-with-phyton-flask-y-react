import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
// importacion del componente para poder renderizarlo o dibujarlo (citarlo)
import {CharacterDetails} from "./views/characterdetails.jsx"
import { PlanetDetails } from "./views/planetsdetails.jsx";
import { VehiclesDetails } from "./views/vehiclesdetails.jsx";
// OJO CON IMPORTAR LA RUTA ACA

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>{" "}
            <Route exact path="/demo">
              <Demo />
            </Route>{" "}
            <Route exact path="/single/:theid">
              <Single />
            </Route>{" "}
            {/* Marcado de la ruta(characterdetails) o direccion para acceder al componente CharacterDetails */}
            <Route exact path="/characterdetails/:theid">
              <CharacterDetails />
            </Route>{" "}
            <Route exact path="/planetsdetails/:theid">
              <PlanetDetails />
            </Route>{" "}
            <Route exact path="/vehiclesdetails/:theid">
              <VehiclesDetails />
              {/* SIEMPRE QUE COLOQUES LA RUTA DEBES IMPORTARLA EN LA PARTE SUPERIOR */}
            </Route>{" "}
            <Route>
              <h1> Not found! </h1>{" "}
            </Route>{" "}
          </Switch>{" "}
          <Footer />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);

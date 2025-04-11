import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import ElementoActual from "./views/ElementoActual.jsx";
import DetalleFilms from "./views/DetalleFilms.jsx";
import DetallesPeople from "./views/DetallesPeople.jsx";
import DetallesPlaneta from "./views/DetallesPlaneta.jsx";
import DetallesSpecies from "./views/DetallesSpecies.jsx";
import DetallesStarship from "./views/DetallesStarship.jsx";
import DetallesVehicle from "./views/DetallesVehicle.jsx";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import "../styles/index.css"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="body">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/ElementoActual" element={<ElementoActual />} />
						<Route path="/Detalle/films" element={<DetalleFilms />} />
						<Route path="/Detalle/people" element={<DetallesPeople />} />
						<Route path="/Detalle/planets" element={<DetallesPlaneta />} />
						<Route path="/Detalle/starships" element={<DetallesStarship />} />
						<Route path="/Detalle/vehicles" element={<DetallesVehicle />} />
						<Route path="/Detalle/species" element={<DetallesSpecies />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

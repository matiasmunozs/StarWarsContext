import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./store/appContext";

import { Footer } from "./component/footer";

//components
import Navbar from "./component/navbar"


//views
import Home from "./views/Home"
import People from "./views/People"
import Planets from "./views/Planets"
import Vehicles from "./views/Vehicles"
import NotFound from "./views/NotFound";
import Favorites from "./views/Favorites";
import PlanetDetail from "./views/Planetdetail";
import PeopleDetail from "./views/PeopleDetail";
import VehicleDetail from "./views/VehicleDetail";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Switch>

						<Route exact path="/" component={Home} />

						<Route exact path="/people" component={People} />

						<Route exact path="/planets" component={Planets} />

						<Route exact path="/vehicles" component={Vehicles} />

						<Route exact path="/favorites" component={Favorites} />

						<Route exact path="/planets/:id" component={PlanetDetail} />

						<Route exact path="/people/:id" component={PeopleDetail} />

						<Route exact path="/vehicles/:id" component={VehicleDetail} />


						<Route component={NotFound} />


					</Switch>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

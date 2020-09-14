import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";
import Navbar from "../src/components/navigation/Navbar";

function App() {
	return (
		<div className="container">
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />{" "}
				</Route>
				<Route path="/projects">
					<Projects />{" "}
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

import React from "react";
import Header from "./components/home/Header";
import About from "../src/pages/About";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";
import Navbar from "../src/components/navigation/Navbar";

function App() {
	return (
		<div className="container">
			<Navbar />
			<Header id="home" />
			<About id="about" />
			<Projects id="projects" />
			<Contact id="contact" />
		</div>
	);
}

export default App;

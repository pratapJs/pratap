import React from "react";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";
import Navbar from "../src/components/navigation/Navbar";

function App() {
	return (
		<div className="container">
			<Navbar />
			<section id="home">
				<Home />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</div>
	);
}

export default App;

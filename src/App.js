import React from "react";
import Header from "./components/home/Header";
import About from "../src/pages/About";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";
import Navbar from "../src/components/navigation/Navbar";

function App() {
	const [activeTab, setActiveTab] = React.useState("home");
	return (
		<div className="container">
			<Navbar setActiveTab={setActiveTab} />
			{activeTab === "home" && (
				<Header id="home" changeTab={() => setActiveTab("projects")} />
			)}
			{activeTab === "about" && <About id="about" />}
			{activeTab === "projects" && <Projects id="projects" />}
			{activeTab === "contact" && <Contact id="contact" />}
		</div>
	);
}

export default App;

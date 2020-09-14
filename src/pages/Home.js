import React from "react";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Header from "../components/home/Header";
import SocialMedia from "../components/contact/SocialMedia";
import Navbar from "../components/navigation/Navbar";
const Home = () => {
	return (
		<>
			<Header />
			<Navbar />
			<About />
			<Projects />
			<Contact />
			<SocialMedia />
		</>
	);
};

export default Home;

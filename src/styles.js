import styled from "styled-components";
import { Link } from "react-router-dom";

export const setColor = {
	primaryColor: "#252934",
	primaryColorLight: "#5F5F5F",

	secondaryColor: "#1B242F ",
	secondaryColorLight: "#1E242C",

	redColor: "#FA1F79",
	greenColor: "#0F929B",
	blueColor: "#195C92",
	whiteColor: "#fff",
};

export const setFont = {
	main: "font-family: 'Raleway', sans-serif;",
	slanted: "font-family: 'Open Sans Condensed', sans-serif;",
};

export const setFlex = ({ x, y }) => {
	return `display:flex; align-items:${x}; justify-content:${y}`;
};

export const setGrid = ({ x, y }) => {
	return `display:grid; align-items:${x}; justify-content:${y}`;
};

export const Button = styled(Link)`
	text-decoration: none;
	padding: 0.3em;
	text-align: center;
	height: 5vh;
	width: 20vh;
	background: transparent;
	color: white;
	border: 2px solid white;
	font-size: 2.5em;
	&:hover {
		padding-right: 1em;
		transition: all 0.2s ease-in-out;
		background: ${setColor.redColor};
	}
`;

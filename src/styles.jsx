import styled, { keyframes, css } from "styled-components";

const sizes = {
	mobileS: 320,
	mobileM: 480,
	mobileL: 576,
	tablet: 768,
	laptop: 1024,
	laptopL: 1440,
	desktop: 2560,
};
// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`;
	return acc;
}, {});

export const setColor = {
	primaryColor: "#252934",
	primaryColorLight: "#333",
	secondaryColor: "#1B242F ",

	redColor: "#FA1F79",
	greenColor: "#0F929B",
	borderColor: "#04c2c9",
	greenLightColor: "#76d7de",
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

export const setBorder = ({ width = "2px", style = "solid" }) => {
	return `border:${width} ${style} `;
};

export const fadeIn = (start, mid, end) => {
	const animation = keyframes`
	0% {
		opacity: 0;
		transform: translateX(${start});
	}

	50% {

		opacity:0.5;
		transform:translateX(${mid});
	}
	100% {
		opacity: 1;
		transform: translateX(${end});
	
}


`;

	return css`
		animation: ${animation} 3s ease-in-out;
	`;
};

export const setTransition = ({
	property = "all",
	time = "0.2s",
	timing = "ease-in-out",
} = {}) => {
	return `transition:${property} ${time} ${timing}`;
};

export const mainButton = styled.button`
	display: inline-block;
	text-decoration: none;
	padding: 1rem;
	text-align: center;
	cursor: pointer;

	background: transparent;
	color: ${(props) => (props.color ? props.color : "white")};
	${(props) => setBorder({ width: "2px", style: "solid" })};
	border-color: ${(props) => (props.color ? props.color : "white")};
	font-size: 2.5rem;
	text-transform: capitalize;

	span {
		color: #fff;
	}
	&:hover {
		background-color: ${setColor.redColor};
		padding-right: 0.5em;
		transition: all 0.2s ease-in-out;
	}
`;

export const SmallBtn = styled(mainButton)`
	font-size: 1.5rem;
	padding: 0.2rem 1rem;
`;

export const Button = mainButton;

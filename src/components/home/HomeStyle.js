import styled from "styled-components";

import { setColor, fadeIn, setBorder } from "../../styles";

export const HeaderContainer = styled.div`
	background: ${setColor.primaryColor};
	grid-column: full-start/full-end;

	display: grid;

	grid-template-rows: 95vh;
	grid-template-areas: "overlap";
	grid-row-gap: 2rem;

	.homeText {
		grid-area: overlap;
		display: grid;
		margin-left: 2rem;
		align-self: center;
		justify-self: center;
		${fadeIn("-40em", "5em", 0)}
	}

	span {
		color: ${setColor.redColor};
	}
`;

export const Button = styled.button`
	${fadeIn("40em", "-5em", 0)};
	z-index: 13;
	height: 5rem;
	width: 20rem;
	justify-self: center;
	margin-top: 3rem;
	cursor: pointer;
	display: inline-block;

	padding: 1rem;
	text-align: center;

	background: transparent;
	color: ${(props) => (props.color ? props.color : "white")};
	${setBorder({ width: "2px", style: "solid" })};
	border-color: ${(props) => (props.color ? props.color : "white")};
	font-size: 2.5rem;
	text-transform: capitalize;

	span {
		color: #fff;
		text-decoration: none;
	}

	a:link {
		text-decoration: none;
	}
	&:hover {
		background-color: ${setColor.redColor};
		padding-right: 0.5em;
		transition: all 0.2s ease-in-out;
	}
`;

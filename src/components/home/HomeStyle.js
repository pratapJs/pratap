import styled from "styled-components";

import { setColor, fadeIn } from "../../styles";

export const HeaderContainer = styled.div`
	background: ${setColor.primaryColor};
	grid-column: full-start/full-end;
	overflow: hidden;

	display: grid;

	grid-template-rows: calc(100vh - 7.5em);
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
	color: white;
	border: 2px solid white;

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
		/* padding-right: 0.5em; */
		/* transition: all 0.2s ease-in-out; */
	}
`;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { setColor, fadeIn } from "../../styles";

export const HeaderContainer = styled.div`
	background: ${setColor.primaryColor};
	grid-column: full-start/full-end;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 2fr));
	grid-template-rows: 95vh;
	grid-template-areas: "overlap";

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

export const Button = styled(Link)`
	/* ${fadeIn("40em", "-5em", 0)}; */
	z-index: 13;
	height: 5rem;
	width: 20rem;
	justify-self: center;
	margin-top: 3rem;
	cursor: pointer;
	display: inline-block;
	border: 2px solid white;
	padding: 1rem;
	text-align: center;

	background: transparent;
	color: white;

	text-decoration: none;
	font-size: 2.5rem;
	text-transform: capitalize;

	span {
		color: #fff;
	}

	:hover {
		background-color: ${setColor.redColor};
		/* padding-right: 0.5em; */
		/* transition: all 0.2s ease-in-out; */
	}
`;

import styled from "styled-components";
import { setColor, setFont, media } from "../../styles";

export const FormContainer = styled.div`
	/* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
	display: grid;

	margin-top: 10rem;
	justify-content: center;
	textarea {
		min-height: 20rem;
		min-width: 40rem;
		margin-top: 1rem;
		margin-left: 0.5rem;
	}

	input {
		width: 40rem;
		height: 4.5rem;
		color: #000;
		margin: 0.8rem;

		${media.mobileM`
			width:30rem; 
			
			
	
	`}
	}

	p {
		margin-bottom: 4rem;
		color: ${setColor.greenLightColor};
		justify-self: center;
	}
`;

export const Button = styled.button`
	padding: 0.3em;
	text-align: center;

	height: 5rem;
	width: 25rem;
	background: transparent;
	font-size: 2.5rem;
	border: 2px solid white;
	justify-self: center;
	margin: 4rem 0;
	cursor: pointer;

	span {
		font-family: ${setFont.slanted};
		color: #fff;
	}

	a:link {
		text-decoration: none;
	}

	&:hover {
		background: ${setColor.redColor};

		span {
			padding-right: 0.5em;
			transition: all 0.2s ease-in-out;
			color: #fff;
		}
	}
`;

import styled from "styled-components";
import { setColor, setFont, media } from "../../styles";

export const FormContainer = styled.div`
	/* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
	display: grid;

	margin-top: 10rem;
	justify-content: center;
	textarea {
		margin-top: 1rem;
		margin-left: 0.5rem;
		font-family: ${setFont.main};
		font-size: 2rem;
	}

	input {
		width: 40rem;
		height: 4.5rem;
		color: #000;
		margin: 0.8rem;
		font-family: ${setFont.main};
		font-size: 1.5rem;
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
	width: 22rem;
	background: transparent;
	font-size: 2.2rem;
	border: 2px solid white;
	justify-self: center;
	margin-top: 2rem;
	margin-left: 8rem;
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

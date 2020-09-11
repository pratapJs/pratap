import React, { useState } from "react";
import styled from "styled-components";
import { setColor, setFont } from "../../styles";

const ContactForm = () => {
	const [name, setName] = useState(" ");
	const [email, setEmail] = useState(" ");
	const [text, setText] = useState(" ");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, email, text);
	};

	return (
		<>
			<FormContainer>
				<p> Have a question or want to work together?</p>
				<form>
					<div>
						<input
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div>
						<input
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<input
							type="text"
							placeholder="Your Message"
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
					</div>
				</form>
				<Button type="button" className="submit">
					<span>Submit </span>
				</Button>
			</FormContainer>
		</>
	);
};

export default ContactForm;

const FormContainer = styled.div`
	display: grid;
	justify-content: center;

	div {
		margin-bottom: 1em;
		input {
			width: 30em;
			height: 40px;
			color: #000;
		}
	}

	p {
		font-size: 2em;
		margin-bottom: 1em;
		margin-top: 4em;
		margin-left: 2em;
	}
`;

const Button = styled.button`
	padding: 0.3em;
	text-align: center;
	height: 4vh;
	width: 12vh;
	background: transparent;
	grid-row: 3/4;
	border: 2px solid white;
	font-size: 2em;
	justify-self: center;
	align-self: end;
	margin-top: 1em;
	margin-bottom: 2em;
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

import React from "react";
import styled from "styled-components";
import { setColor, setFont, media } from "../../styles";

const ContactForm = () => {
	/* const [name, setName] = useState(" ");
	const [email, setEmail] = useState(" ");
	const [text, setText] = useState(" ");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, email, text);
	};
 */
	return (
		<FormContainer>
			<p> Have a question or want to work together?</p>
			<form>
				<div>
					<input
						type="text"
						placeholder=" Name"
						/* 	value={name}
						onChange={(e) => setName(e.target.value)} */
					/>
				</div>
				<div>
					<input
						type="email"
						placeholder="Enter email"
						/* value={email}
						onChange={(e) => setEmail(e.target.value)} */
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="Your Message"
						/* value={text}
						onChange={(e) => setText(e.target.value)} */
					/>
				</div>
			</form>
			<Button type="button" className="submit">
				<span>Submit </span>
			</Button>
		</FormContainer>
	);
};

export default ContactForm;

const FormContainer = styled.div`
	/* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
	display: grid;

	margin-top: 10rem;
	justify-content: center;

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

const Button = styled.button`
	padding: 0.3em;
	text-align: center;

	height: 5rem;
	width: 16rem;
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

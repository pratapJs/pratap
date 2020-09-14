import React from "react";
import ContactForm from "../components/contact/ContactForm";
import HeaderContact from "../components/contact/HeaderContact";
import { setColor } from "../styles";
import styled from "styled-components";

const Contact = () => {
	return (
		<>
			<ContactContainer>
				<HeaderContact />
				<ContactForm />
			</ContactContainer>
		</>
	);
};

export default Contact;

const ContactContainer = styled.div`
	background-color: ${setColor.primaryColor};
	grid-gap: 5rem;
	display: grid;
	grid-column: full-start/full-end;

	/* clip-path: polygon(0 0, 50% 10%, 100% 0, 100% 100%, 0 100%); */
`;

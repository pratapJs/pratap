import React from "react";
import ContactForm from "../components/contact/ContactForm";
import HeaderContact from "../components/contact/HeaderContact";
import { setColor } from "../styles";
import styled from "styled-components";
import SocialMedia from "../components/contact/SocialMedia";

const Contact = () => {
	return (
		<>
			<ContactContainer>
				<HeaderContact />
				<ContactForm />
				<SocialMedia />
			</ContactContainer>
		</>
	);
};

export default Contact;

const ContactContainer = styled.div`
	background-color: ${setColor.primaryColor};
	/* grid-template-rows: 55vh; */
	display: grid;
	grid-column: full-start/full-end;

	/* clip-path: polygon(0 0, 50% 10%, 100% 0, 100% 100%, 0 100%); */
`;

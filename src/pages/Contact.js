import React from "react";
import ContactForm from "../components/contact/ContactForm";

import { ContactContainer } from "../styles/components/ContactStyle";

const Contact = () => {
	return (
		<>
			<ContactContainer>
				<div>
					{" "}
					<h1>Contact</h1>{" "}
				</div>

				<ContactForm />
			</ContactContainer>
		</>
	);
};

export default Contact;

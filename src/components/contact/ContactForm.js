import React from "react";
import { Button, FormContainer } from "./ContactForm.style";
const ContactForm = () => {
	return (
		<FormContainer>
			<p> Have a question or want to work together?</p>
			<form name="contact" action="/contact" method="post">
				<input type="hidden" name="from-name" value="contact" />
				<div>
					<input required type="text" placeholder="Your Name" />
				</div>
				<div>
					<input required type="email" placeholder="Enter email" />
				</div>

				<div>
					<textarea
						required
						type="textarea"
						cols="30"
						rows="10"
						placeholder="Your Message"
					/>
				</div>
			</form>
			<Button type="submit">
				<span>Send Message </span>
			</Button>
		</FormContainer>
	);
};

export default ContactForm;

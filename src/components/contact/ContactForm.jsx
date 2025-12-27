import React from "react";
import { Button, FormContainer } from "./ContactForm.style";
const ContactForm = () => {
	const [status, setStatus] = React.useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => setStatus("Message sent successfully!"))
			.catch((error) => setStatus("Error sending message."));
	};

	return (
		<FormContainer>
			<p> Have a question or want to work together?</p>
			<form name="contact" method="POST" onSubmit={handleSubmit} data-netlify="true">
				<input type="hidden" name="form-name" value="contact" />
				<div>
					<input required type="text" placeholder="Your Name" name="name" />
				</div>
				<div>
					<input required type="email" placeholder="Enter email" name="email" />
				</div>

				<div>
					<textarea
						required
						type="textarea"
						placeholder="Your Message"
						name="message"
					/>
				</div>
				<Button type="submit">
					<span>Send Message </span>
				</Button>
				{status && <p style={{ marginTop: "1rem", color: "#FA1F79" }}>{status}</p>}
			</form>
		</FormContainer>
	);
};

export default ContactForm;

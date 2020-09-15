import React from "react";
import { Button, FormContainer } from "./ContactForm.style";
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
			<form name="contact" method="post">
				<input type="hidden" name="form-name" value="contact" />
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
					<textarea
						type="textarea"
						placeholder="Your Message"

						/* value={text}
						onChange={(e) => setText(e.target.value)} */
					/>
				</div>
				{/* <div>
					<div data-netlify-recaptcha="true"></div>
				</div> */}
			</form>
			<Button type="button" className="submit">
				<span>Send Message </span>
			</Button>
		</FormContainer>
	);
};

export default ContactForm;

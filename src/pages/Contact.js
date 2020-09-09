import React from "react";
import { ContactContainer } from "../styles/components/ContactStyle";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<ContactContainer>
			<div className="contact">
				<h1>Contact</h1>

				<p> Have a question or want to work together?</p>

				<form>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Enter email" />
					<input type="text" placeholder="Your Message" />
					<button type="button" className="submit">
						Submit
					</button>
				</form>
			</div>
			<div>
				<Link to="/">Up</Link>
				<img src="" alt="facebook" />
				<img src="" alt="instagram" />
				<img src="" alt="twitter" />
			</div>
		</ContactContainer>
	);
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";

const NavLink = () => {
	return (
		<div>
			<ul className="nav-links">
				<li>
					<Link to="/" className="link">
						Home
					</Link>
				</li>
				<li>
					<Link to="/about" className="link">
						About
					</Link>
				</li>
				<li>
					<Link to="/projects" className="link">
						Projects
					</Link>
				</li>
				<li>
					<Link to="/contact" className="link">
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavLink;

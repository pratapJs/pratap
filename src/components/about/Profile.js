import React from "react";
import styled from "styled-components";
import Photo from "../../images/circlephoto.png";
import { setFont, setColor } from "../../styles";
import Bar from "../../components/about/Bar";
import Resume from "../../images/Pratap_Adhikari_Resume.PDF";
import { Link } from "react-router-dom";

const Profile = () => {
	return (
		<ProfileDiv>
			<div className="profiledesc">
				<img src={Photo} alt="my Profile" className="image" />

				<h4>Pratap Adhikari</h4>

				<p>
					{" "}
					I'm a Front-End Developer from Darwin, Australia.
					<br />I focus on creating intuitive, dynamic user experiences.
				</p>

				<Button to={Resume} target="_blank">
					<span> My Resume </span>{" "}
				</Button>
			</div>
			<div className="bar">
				<Bar />
			</div>
		</ProfileDiv>
	);
};

export default Profile;

const ProfileDiv = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(37rem, 1fr));

	grid-gap: 5rem;

	p {
		font-family: ${setFont.slanted};
		line-height: 18pt;
		color: ${setColor.primaryColorLight};
	}
	h4 {
		margin-left: 5rem;
		margin-top: 2rem;
	}

	.profiledesc {
		justify-self: center;
		margin-left: 3rem;
	}

	.bar {
		justify-self: center;
	}
`;
const Button = styled(Link)`
	margin-left: 5rem;
	padding: 0.3em;
	text-align: center;
	height: 5rem;
	width: 16rem;
	background: transparent;
	margin-top: 2rem;
	border: 2px solid ${setColor.redColor};
	font-size: 2.2rem;
	text-decoration: none;
	display: block;
	span {
		color: ${setColor.greenColor};
		font-family: ${setFont.slanted};
	}

	&:hover {
		background: ${setColor.redColor};
		color: white;
		padding-right: 0.5em;
		transition: all 0.2s ease-in-out;
		border-color: ${setColor.greenColor};

		span {
			/* padding-right: 1rem;
			transition: all 0.2s ease-in-out; */
			color: white;
		}
	}
`;

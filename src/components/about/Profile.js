import React from "react";
import styled from "styled-components";
import circlePhoto from "../../images/circlephoto.png";
import { setFont, setColor, Button } from "../../styles";
import BarChart from "../../components/barchart/BarChart";

const Profile = () => {
	return (
		<ProfileDiv>
			<img src={circlePhoto} alt="my Profile" className="image" />
			<div className="bar">
				<BarChart />
			</div>
			<p>
				{" "}
				I'm a full-stack developer from Darwin, NT, Australia.
				<br />I am passionate about creating intuitive, dynamic websites and
				mobile applications.
			</p>
			<LinkButton to="/about">
				<span> My Resume </span>
			</LinkButton>
		</ProfileDiv>
	);
};

export default Profile;

const LinkButton = styled(Button)`
	grid-row: 3/4;
	justify-self: start;
	border-color: ${setColor.redColor};

	&:hover {
		border-color: #fff;
		span {
			color: #fff;
		}
	}

	span {
		color: #000;
	}
`;

const ProfileDiv = styled.div`
	display: grid;
	margin-top: 1em;
	grid-gap: 0.5em;

	p {
		grid-row: 2/3;
		font-size: 2em;
		font-family: ${setFont.slanted};
	}
	h3 {
		font-size: 2.1em;
		text-decoration: 2px solid underline ${setColor.redColor};
	}
	.image {
		transition: transform 0.8s ease-in-out;
		&:hover {
			transform: rotate(360deg);
		}
	}

	.bar {
		grid-column: 4/10;

		grid-row: 1/3;
		align-self: end;
		justify-self: end;
		margin-right: 10em;
		font-family: ${setFont.slanted};
		font-size: 1.2em;
	}
`;

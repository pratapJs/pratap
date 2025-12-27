import React from "react";

import styled from "styled-components";
import { media } from "../../styles";

const Bar = () => {
	const skillsData = [
		{
			name: "Javascript",
			level: 90,
			color: "#0F929B",
		},
		{
			name: "Reactjs",
			level: 95,
			color: "#0F929B",
		},
		{
			name: "ReactNative",
			level: 85,
			color: "#0F929B",
		},
		{
			name: "Nodejs",
			level: 85,
			color: "#0F929B",
		},
		{
			name: "CSS",
			level: 95,
			color: "#0F929B",
		},
		{
			name: "HTML",
			level: 95,
			color: "#0F929B",
		},
		{
			name: "XSLT",
			level: 90,
			color: "#0F929B",
		},
	];
	return (
		<BarContainer>
			{skillsData.map((skill) => (
				<SkillWrapper key={skill.name}>
					<SkillLabel>{skill.name}</SkillLabel>
					<SkillBarBackground>
						<SkillBarFill level={skill.level} color={skill.color}>
							<SkillPercent>{skill.level}%</SkillPercent>
						</SkillBarFill>
					</SkillBarBackground>
				</SkillWrapper>
			))}
		</BarContainer>
	);
};

export default Bar;

const BarContainer = styled.div`
	width: 50rem;
	margin-top: 5rem;
	${media.tablet`
width:40rem;
	
	`}

	${media.mobileM`
width:30rem;
	
	`}
	
	${media.mobileS`
width:25rem;
	`}
`;

const SkillWrapper = styled.div`
	margin-bottom: 1.5rem;
	display: flex;
	align-items: center;
`;

const SkillLabel = styled.span`
	width: 14rem;
	font-size: 1.6rem;
	color: #333;
	font-weight: bold;
	padding-right: 1rem;
	text-align: right;
`;

const SkillBarBackground = styled.div`
	flex: 1;
	height: 2.5rem;
	background-color: #eee;
	border-radius: 1rem;
	overflow: hidden;
	position: relative;
`;

const SkillBarFill = styled.div`
	height: 100%;
	width: ${(props) => props.level}%;
	background-color: ${(props) => props.color};
	border-radius: 1rem 0 0 1rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 1rem;
	transition: width 1s ease-in-out;
`;

const SkillPercent = styled.span`
	color: white;
	font-size: 1.2rem;
	font-weight: bold;
`;

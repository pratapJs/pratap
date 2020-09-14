import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

const constellation = () => {
	return (
		<ConstellationStyle>
			<Particles
				params={{
					particles: {
						number: {
							value: 100,
						},
						shape: {
							type: "edge",

							stroke: {
								width: 1,

								color: "#FA1F79",
							},

							density: {
								enable: true,
								value_area: 100,
							},
						},
					},
				}}
			/>
		</ConstellationStyle>
	);
};

export default constellation;

const ConstellationStyle = styled.div`
	display: grid;

	grid-area: overlap;
`;

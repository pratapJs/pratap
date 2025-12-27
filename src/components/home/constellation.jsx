import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import styled from "styled-components";

const Constellation = () => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container) => {
		// console.log(container);
	};

	const options = useMemo(
		() => ({
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
				},
				opacity: {
					value: 1,
				},
				size: {
					value: 3,
				},
				move: {
					enable: true,
					speed: 1,
				},
				links: {
					enable: true,
					color: "#FA1F79",
					distance: 150,
					opacity: 1,
					width: 1,
				},
			},
		}),
		[]
	);

	if (init) {
		return (
			<ConstellationStyle>
				<Particles
					id="tsparticles"
					particlesLoaded={particlesLoaded}
					options={options}
				/>
			</ConstellationStyle>
		);
	}

	return <ConstellationStyle></ConstellationStyle>;
};

export default Constellation;

const ConstellationStyle = styled.div`
	display: grid;

	grid-area: overlap;
`;

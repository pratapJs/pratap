// MyBarChart.js
import React from "react";
import {
	XYPlot,
	XAxis, // Shows the values on x axis
	YAxis, // Shows the values on y axis
	VerticalRectSeries,
} from "react-vis";

const values = [
	{ y: 70 },
	{ y: 80 },
	{ y: 60 },
	{ y: 50 },
	{ y: 80 },
	{ y: 80 },
	{ y: 40 },
	{ y: 40 },
];

const labels = [
	"JavaScript",
	"React Js",
	"React Native",
	"Node Js",
	"HTML",
	"CSS",
	"C",
	"Java",
];

class MyBarChart extends React.Component {
	columnWidth = 0.7;

	transformDataToRectSeries(raw) {
		const transformed = raw.map((el, i) => {
			el.x0 = i + 1 - this.columnWidth / 2;
			el.x = i + 1 + this.columnWidth / 2;
			return el;
		});
		transformed.unshift({ x: 0.5, y: 0 }); // fake data point, enables margin between y-axis and first column
		transformed.push({ x: 3.5, y: 0 }); // fake data point, enables margin between last column and chart end
		return transformed;
	}

	render() {
		return (
			<XYPlot width={500} height={400}>
				<XAxis
					tickFormat={(v, i) => labels[i]}
					tickValues={[1, 2, 3, 4, 5, 6, 7, 8]}
					tickTotal={1}
				/>
				<YAxis />
				<VerticalRectSeries data={this.transformDataToRectSeries(values)} />
			</XYPlot>
		);
	}
}

export default MyBarChart;

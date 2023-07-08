import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
const Chart = () => {
	const barChartData = {
		labels: ["кв 1 ", "кв 2", "кв 3", 'кв 4'],
		datasets: [
			{
				data: [8137119, 9411691, 10266674, 2312323],
				label: "закрытые",
				borderColor: "#3333ff",
				backgroundColor: "red",
				fill: false
			},
			{
				data: [1216410, 1371390, 1477380, 2223123],
				label: "новые",
				borderColor: "#ff3333",
				backgroundColor: "blue",
				fill: false
			},
			{
				data: [1216410, 1371390, 14727380, 1477380],
				label: "текущие",
				borderColor: "#ff3333",
				backgroundColor: "yellow",
				fill: false
			},


		]
	};

	const barChart = (
		<Bar
			type="bar"
			width={50}
			height={50}
			options={{
				title: {
					display: false,
					text: "Статистика заявок",
					fontSize: 15
				},
				legend: {
					display: false, //Is the legend shown?
					position: "top" //Position of the legend.
				}
			}}
			data={barChartData}
		/>
	);
	return barChart;
};

export default Chart;
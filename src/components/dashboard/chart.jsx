import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
const ChartComponent = () => {
	const lineChartData = {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
		datasets: [
			{
				data: [464, 470, 480, 450, 450, 440, 430, 454, 420, 405, 320, 220, 300, 333, 222, 430, 420, 410, 432, 450, 440, 430, 454, 420, 405, 320, 220, 300, 333, 222, 430, 420, 410, 432],
				label: "Покупка",
				borderColor: "red",
				backgroundColor: "rgba(5, 129, 211, 0.411)",
				fill: true,
				lineTension: 0.5
			},
			{
				data: [467, 448, 464, 450, 450, 440, 430, 454, 420, 430, 420, 410, 432, 330, 420, 405, 320, 220, 300, 333, 222, 430, 420, 410, 432, 450, 440, 430, 454, 420, 405, 320, 220, 300, 333, 222,],
				label: "Продажа",
				borderColor: "green",
				backgroundColor: "rgba(5, 129, 211, 0.411)",
				fill: true,
				lineTension: 0.5
			}
		]
	};

	return (
		<Line
			type="radar"
			width={160}
			height={60}
			options={{
				scales: {
					x: {
						type: "category"
					},
					y: {
						beginAtZero: true
					}
				},
				plugins: {
					title: {
						display: true,
						text: "График курса валют",
						fontSize: 30
					},
					legend: {
						display: false,
						position: "center"
					}
				}
			}}
			data={lineChartData}
		/>
	);
};

export default ChartComponent;

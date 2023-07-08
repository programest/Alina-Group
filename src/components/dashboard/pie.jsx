import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const Chart = () => {
	const kpiData = {
		labels: ["Выполнено", "Осталось"],
		datasets: [
			{
				data: [80, 20], // Пример данных - 80% выполнено, 20% осталось
				backgroundColor: ["green", "gray"], // Цвета для секторов
			},
		],
	};

	const pieChart = (
		<Pie
			type="pie"
			width={130}
			height={50}
			options={{
				plugins: {
					title: {
						display: true,
						text: "Процентное выполнение KPI",
						fontSize: 15,
					},
					legend: {
						display: true,
						position: "top",
					},
				},
			}}
			data={kpiData}
		/>
	);

	return pieChart;
};

export default Chart;

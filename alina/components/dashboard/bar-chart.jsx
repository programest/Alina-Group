import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const Chart = () => {
	const kpiData = {
		labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"],
		datasets: [
			{
				label: "Выполнение KPI",
				data: [70, 80, 85, 90, 75, 95], // Пример данных - процент выполнения KPI для каждого месяца
				borderColor: "blue", // Цвет графика
				fill: false, // Заполнение под графиком отключено
			},
		],
	};

	const LineChart = (
		<Line
			type="line"
			width={130}
			height={50}
			options={{
				plugins: {
					title: {
						display: true,
						text: "Линейчатая диаграмма выполнения KPI",
						fontSize: 15,
					},
					legend: {
						display: true,
						position: "top",
					},
				},
				scales: {
					x: {
						display: true,
						title: {
							display: true,
							text: "Месяц",
						},
					},
					y: {
						display: true,
						title: {
							display: true,
							text: "Процент выполнения",
						},
						min: 0, // Минимальное значение оси Y
						max: 100, // Максимальное значение оси Y
					},
				},
			}}
			data={kpiData}
		/>
	);

	return LineChart;
};

export default Chart;
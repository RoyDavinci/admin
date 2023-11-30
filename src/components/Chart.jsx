import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export const Graph = ({ unknown, ios, android }) => {
	const labels = ["ios", "unknown", "android"];

	const data = {
		labels,
		datasets: [
			{
				label: "User Device Detsils",
				data: [ios, unknown, android],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	return (
		<div className='text-center'>
			<h4>User By Device</h4>
			<Doughnut
				data={data}
				width={"30%"}
				height={"30%"}
				// options={{ maintainAspectRatio: false }}
			/>
		</div>
	);
};

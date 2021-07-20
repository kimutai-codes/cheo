import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const DayChart = () => {
	const url = 'http://192.168.8.101:3000/api/daydata/';
	const [chartData, setChartData] = useState({});
	// const [day, setDay] = useState([]);
	// const [eggs, setEggs] = useState([]);

	const chart = () => {
		const eggNum = [];
		const dayZ = [];
		axios
			.get(url)
			.then((res) => {
				for (const dataObj of res.data) {
					eggNum.push(dataObj.eggs_collected);
					dayZ.push(dataObj.day_recorded);
				}
				setChartData({
					labels: dayZ,
					datasets: [
						{
							label: 'Eggs',
							data: eggNum,
							backgroundColor: 'lightcyan',
							borderColor: 'grey',
							borderWidth: 2,
						},
					],
				});
			})
			.catch((err) => console.log(err));
		console.log(eggNum, dayZ);
	};

	useEffect(() => {
		chart();
	}, []);

	return (
		<div>
			<Bar
				data={chartData}
				options={{
					responsive: true,
					scales: {
						y: {
							beginAtZero: true,
						},
					},
				}}
			/>
		</div>
	);
};
export default DayChart;

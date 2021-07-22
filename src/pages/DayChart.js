import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { format } from 'date-fns';
import Layout from '../components/Layout';

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
					const date = dataObj.day_recorded;
					const parsedDate = format(new Date(date), 'do MMM yyy');
					dayZ.push(parsedDate);
				}
				setChartData({
					labels: dayZ,
					datasets: [
						{
							label: 'Eggs',
							data: eggNum,
							backgroundColor: 'lightcyan',
							borderColor: 'grey',
							borderWidth: 1,
						},
					],
				});
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		chart();
	}, []);

	return (
		<div>
			<Layout />
			<Line
				data={chartData}
				options={{
					responsive: true,
					scales: {
						y: {
							beginAtZero: true,
						},
						xAxis: {
							// type: 'time',
							// max: 6,
						},
					},
				}}
			/>
		</div>
	);
};
export default DayChart;

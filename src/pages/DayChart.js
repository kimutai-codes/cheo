import axios from 'axios';
import { useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Bar, Line } from 'react-chartjs-2';

const url = 'http://192.168.8.101:3000/api/daydata/';

const DayChart = () => {
	const [days, setDays] = useState([]);
	const [dayArr, setDayArr] = useState([]);
	const [eggArr, setEggArr] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setDays(res.data);
				// console.log(res.data);

				let dayArray = [];
				for (let i = 0; i < res.data.length; i++) {
					dayArray.push(res.data[i].day_recorded);
				}
				setDayArr(dayArray);

				let eggArray = [];
				for (let i = 0; i < res.data.length; i++) {
					eggArray.push(res.data[i].eggs_collected);
				}
				setEggArr(eggArray);
			})
			.then(() => setLoading(false))
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// console.log(dayArr);
	// console.log(eggArr);

	// const dayRun = () => {};

	// let eggArray = [];
	// for (let i = 0; i < days.length; i++) {
	// 	eggArray.push(days[i].eggs_collected);
	// }
	// console.log(eggArray);
	return (
		<div>
			<h1>This Is Days</h1>
			{loading ? (
				<div className='loading'>
					<h1>Loading ...</h1>
					<LoadingOutlined
						style={{ fontSize: '50px', color: '#1890ff' }}
					/>
				</div>
			) : (
				<Line
					
				/>
			)}
		</div>
	);
};
export default DayChart;

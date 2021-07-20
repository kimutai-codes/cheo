import axios from 'axios';
import { useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const url = 'http://192.168.8.101:3000/api/daydata/';

const DayChart = () => {
	const [days, setDays] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setDays(res.data);
				console.log(res.data);
			})
			.then(() => setLoading(false))
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// const dayRun = () => {};
	let dayArray = [];
	for (let i = 0; i < days.length; i++) {
		dayArray.push(days[i].day_recorded);
	}
	console.log(dayArray);

	let eggArray = [];
	for (let i = 0; i < days.length; i++) {
		eggArray.push(days[i].eggs_collected);
	}
	console.log(eggArray);
	return (
		<div>
			<h1>This Is Days</h1>
			<ul>
				{loading ? (
					<div className='loading'>
						<h1>Loading ...</h1>
						<LoadingOutlined
							style={{ fontSize: '50px', color: '#1890ff' }}
						/>
					</div>
				) : (
					<span>chart??</span>
					// <button onClick={dayRun}>Click</button>
				)}
			</ul>
		</div>
	);
};
export default DayChart;

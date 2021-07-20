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
			.then((res) => setDays(res.data))
			.then(() => setLoading(false))
			.catch((err) => {
				console.log(err);
			});
	}, []);

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
				)}
			</ul>
		</div>
	);
};
export default DayChart;

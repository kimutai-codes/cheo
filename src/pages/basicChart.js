import axios from 'axios';
import { useEffect, useState } from 'react';
import { Column } from '@ant-design/charts';

const url = 'http://192.168.8.101:3000/api/daydata/';

const Charty = () => {
	const [charty, setCharty] = useState([]);

	useEffect(() => {
		axios
			.get(url)
			.then((res) => setCharty(res.data))
			.catch((err) => {
				console.log(err);
			});
	}, []);
	const config = {
		data: charty,
		height: 400,
		xField: 'day_recorded',
		yField: 'eggs_collected',
		point: {
			size: 5,
		},
		areaStyle: {
			fill: '#1890ff',
		},
	};
	return <Column {...config} />;
};
export default Charty;

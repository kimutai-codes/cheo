import axios from 'axios';
import { useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const url = 'http://192.168.8.101:3000/api/feeders/';

const Feeders = () => {
	const [feeders, setFeeders] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(url)
			.then((res) => setFeeders(res.data))
			.then(() => setLoading(false))
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<h1>This Is Feeders</h1>
			<ul>
				{loading ? (
					<div className='loading'>
						<h1>Loading ...</h1>
						<LoadingOutlined
							style={{ fontSize: '50px', color: '#1890ff' }}
						/>
					</div>
				) : (
					feeders.map((feeder) => {
						const feederName =
							feeder.first_name + ' ' + feeder.second_name;
						const feederEmail = feeder.feeder_email;
						const feederPhone = feeder.feeder_phone;
						let isAdmin = false;
						if (feeder.is_admin === 1) {
							isAdmin = 'Admin';
						}

						return (
							<li key={feeder.id} className='disp'>
								<h2>{feederName}</h2>
								<p>Email: {feederEmail} </p>
								<p>Phone: {feederPhone} </p>
								<p> {isAdmin}</p>
							</li>
						);
					})
				)}
			</ul>
		</div>
	);
};
export default Feeders;

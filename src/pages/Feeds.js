import axios from 'axios';
import { useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import Layout from '../components/Layout';

const url = 'http://192.168.8.101:3000/api/feeds/';

const Feeds = () => {
	const [feeds, setFeeds] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(url)
			.then((res) => setFeeds(res.data))
			.then(() => setLoading(false))
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<Layout />

			<div>
				<h1>This Is Feeds</h1>
				<ul>
					{loading ? (
						<div className='loading'>
							<h1>Loading ...</h1>
							<LoadingOutlined
								style={{ fontSize: '50px', color: '#1890ff' }}
							/>
						</div>
					) : (
						feeds.map((feed) => {
							const feedName = feed.feed_name;
							const feedPrice = feed.feed_price;
							return (
								<li key={feed.id} className='disp'>
									<h2>{feedName}</h2>{' '}
									<h3>Feed ID: {feed.id}</h3>
									<h3>Feed Price: Ksh {feedPrice}</h3>
								</li>
							);
						})
					)}
				</ul>
			</div>
		</>
	);
};
export default Feeds;

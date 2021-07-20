// import { Button, List } from 'antd';
import { useEffect, useState } from 'react';

const getFeeds = () => {
	return fetch('http://192.168.8.101:3000/api/feeds/').then((res) =>
		res.json()
	);
};

const Feeds = () => {
	const [feeds, setFeeds] = useState([]);

	useEffect(() => {
		getFeeds().then((feeds) => setFeeds(feeds));
	});

	return (
		<div>
			<h1>This Is Feeds</h1>
			<ul>
				{feeds.map((feed) => {
					const feedName = feed.feed_name;
					const feedPrice = feed.feed_price;
					return (
						<li key={feed.id} className='disp'>
							<h2>{feedName}</h2> <h3>{feedPrice}</h3>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default Feeds;

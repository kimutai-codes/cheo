import { Button, List } from 'antd';
import { useState } from 'react';

const Feeds = () => {
	const [feeds, setFeeds] = useState([]);

	const getFeeds = async () => {
		const response = await fetch('http://localhost:3000/api/feeds/');
		const feeds = await response.json();
		console.log(feeds);
		setFeeds(feeds);
	};

	return (
		<div>
			<h1>This Is Feeds</h1>

			<Button onClick={getFeeds}>Get Feeds</Button>
			{feeds.map((feeds, index) => {
				const feedName = feeds.feed_name;
				const feedPrice = feeds.feed_price;
				return (
					<List>
						<List.Item>
							<h2>{feedName}</h2> <h3>{feedPrice}</h3>
						</List.Item>
					</List>
				);
			})}
		</div>
	);
};
export default Feeds;

import { Button } from 'antd';

const Home = () => {
	return (
		<div>
			<h1>Welcome</h1>
			<h2>Who Would You Like To Sign In As</h2>
			<Button type='primary' className='homeBtn'>
				User Login
			</Button>
			<Button type='primary' className='homeBtn'>
				Admin Login
			</Button>
		</div>
	);
};

export default Home;

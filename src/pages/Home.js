import { Button } from 'antd';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => {
	const [wantreg, setWantreg] = useState(false);
	const [wantadmin, setWantAdmin] = useState(false);
	const reg = () => {
		setWantreg(true);
	};
	const admn = () => {
		setWantAdmin(true);
	};
	console.log(wantreg);
	return (
		<div className='homediv'>
			<h1>Welcome</h1>
			<h2>Who Would You Like To Sign In As</h2>
			<Button type='primary' className='userBtn' onClick={reg}>
				User
			</Button>
			<Button type='primary' className='admnBtn' onClick={admn}>
				Admin
			</Button>
			{wantreg ? <Redirect to='/login' /> : null}
			{wantadmin ? <Redirect to='/admin' /> : null}
		</div>
	);
};

export default Home;

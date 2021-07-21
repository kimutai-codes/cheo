import { Button } from 'antd';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

export const Logout = () => {
	const [clicked, setClicked] = useState(false);
	const logout = () => {
		setClicked(true);
	};
	return (
		<div>
			{clicked ? <Redirect to='/' /> : null}
			<Button onClick={logout}>Logout</Button>
		</div>
	);
};

import { Button, PageHeader } from 'antd';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Logout } from './Logout';
import TempDrawer from './TempDrawer';
const Header = () => {
	const [loc, setLoc] = useState(false);
	let location = useLocation();
	if (location.pathname === '/') {
		console.log('yesss!!');
		setLoc(true);
	}
	return (
		<>
			{loc ? (
				<PageHeader className='header'>
					<TempDrawer />
					<Logout />
				</PageHeader>
			) : null}
		</>
	);
};

export default Header;

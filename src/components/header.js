import { Button, PageHeader } from 'antd';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Logout } from './Logout';
import TempDrawer from './TempDrawer';
const Header = () => {
	return (
		<PageHeader className='header'>
			<TempDrawer />
			<Logout />
		</PageHeader>
	);
};

export default Header;

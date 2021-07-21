import { Button, PageHeader } from 'antd';
import { Logout } from './Logout';
import TempDrawer from './TempDrawer';
const Header = () => {
	return (
		<PageHeader className='header'>
			<TempDrawer />
      <Logout/>
		</PageHeader>
	);
};

export default Header;

import { Button, PageHeader } from 'antd';
import TempDrawer from './TempDrawer';
const Header = () => {
	return (
		<PageHeader className='header'>
			<TempDrawer />
			<Button>Logout</Button>
		</PageHeader>
	);
};

export default Header;

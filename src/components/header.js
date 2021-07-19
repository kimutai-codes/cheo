import { Button, PageHeader } from 'antd';
import TempDrawer from './TempDrawer';
const Header = () => {
	return (
		<PageHeader className='header'>
			<TempDrawer />
			{/* <Button>Login</Button> */}
		</PageHeader>
	);
};

export default Header;

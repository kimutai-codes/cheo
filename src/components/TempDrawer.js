import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import { Button } from 'antd/lib/radio';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TempDrawer() {
	const [visible, setVisible] = useState(false);
	const showDrawer = () => {
		setVisible(true);
	};
	const closeDrawer = () => {
		setVisible(false);
	};

	return (
		<div>
			{/* TODO replace with icon */}
			<Button type='primary' onClick={showDrawer}>
				<MenuOutlined />
			</Button>
			<Drawer
				// title='Basic Drawer'
				placement='left'
				closable={false}
				onClose={closeDrawer}
				visible={visible}
			>
				<Button type='primary' onClick={closeDrawer}>
					<MenuOutlined />
				</Button>
				<Menu onClick={closeDrawer}>
					<Menu.Item>
						<Link to={`/days`}>Add Days</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to={`/addfeeder`}>Add Feeders</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to={`/addfeed`}>Add Feeds</Link>
					</Menu.Item>
				</Menu>
			</Drawer>
		</div>
	);
}

export default TempDrawer;

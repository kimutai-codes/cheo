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
					<Menu.Item key={1}>
						<Link to={`/today`}>Record Today</Link>
					</Menu.Item>
					<Menu.Item key={2}>
						<Link to={`/addfeeder`}>Add Feeders</Link>
					</Menu.Item>
					<Menu.Item key={3}>
						<Link to={`/addfeed`}>Add Feeds</Link>
					</Menu.Item>
					<Menu.Item key={4}>
						<Link to={`/feeds`}>Feeds</Link>
					</Menu.Item>
				</Menu>
			</Drawer>
		</div>
	);
}

export default TempDrawer;

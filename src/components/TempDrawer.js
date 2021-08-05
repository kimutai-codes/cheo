import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import { Button } from 'antd/lib/radio';
import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LoginContext } from '../Helper/Context';

function TempDrawer() {
	const [visible, setVisible] = useState(false);
	const { admin, setAdmin } = useContext(LoginContext);

	const showDrawer = () => {
		setVisible(true);
	};
	const closeDrawer = () => {
		setVisible(false);
	};

	return (
		<span>
			{admin ? (
				<span>
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

							<Menu.Item key={3}>
								<Link to={`/addfeed`}>Add Feeds</Link>
							</Menu.Item>

							{/* //admin */}
							<Menu.Item key={4}>
								<Link to={`/addfeeder`}>Add Feeders</Link>
							</Menu.Item>

							<Menu.Item key={2}>
								<Link to={`/daychart`}>Day Chart</Link>
							</Menu.Item>

							<Menu.Item key={5}>
								<Link to={`/feeds`}>Feeds</Link>
							</Menu.Item>

							<Menu.Item key={6}>
								<Link to={`/feeders`}>Feeders</Link>
							</Menu.Item>
						</Menu>
					</Drawer>

					<div>
						{/* {admin ? <div>Admin</div> : <div>Not Admin</div>}{' '} */}
					</div>
				</span>
			) : (
				<span>
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
								<Link to={`/daychart`}>Day Chart</Link>
							</Menu.Item>

							<Menu.Item key={3}>
								<Link to={`/feeds`}>Feeds</Link>
							</Menu.Item>

							<Menu.Item key={4}>
								<Link to={`/feeders`}>Feeders</Link>
							</Menu.Item>
						</Menu>
					</Drawer>

					<div>
						{/* {admin ? <div>Admin</div> : <div>Not Admin</div>}{' '} */}
					</div>
				</span>
			)}
			{/* TODO replace with icon */}
		</span>
	);
}

export default TempDrawer;

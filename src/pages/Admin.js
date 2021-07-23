import { Form, Input, Button, PageHeader } from 'antd';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/header';
import Layout from '../components/Layout';
import { LoginContext } from '../Helper/Context';

const AdminLogin = () => {
	const { admin, setAdmin } = useContext(LoginContext);
	const [fail, setFail] = useState('');
	const [success, setSuccess] = useState(false);

	const url = 'http://192.168.8.101:3000/api/feeders/admin';

	const onFinish = (values) => {
		axios.post(url, values).then((res) => {
			if (!res.data.length) {
				setFail(res.data.message);
			} else {
				setSuccess(true);
				setAdmin(true);
			}
		});
	};
	return (
		<>
			<div className='form-wrapper'>
				{success ? (
					<div>
						<Redirect to='/daychart' />
					</div>
				) : (
					<div>
						<PageHeader className='Adminloginheader' />
						<h1>Admin Login</h1>
						<Form onFinish={onFinish}>
							<Form.Item name='first_name'>
								<Input
									placeholder='Enter First Name'
									required
								></Input>
							</Form.Item>

							<Form.Item name='second_name'>
								<Input
									placeholder='Enter Second Name'
									required
								></Input>
							</Form.Item>

							<Form.Item name='feeder_password'>
								<Input.Password
									placeholder='Enter Password'
									required
								></Input.Password>
							</Form.Item>

							<Form.Item>
								<Button type='primary' htmlType='submit'>
									Admin Login
								</Button>
							</Form.Item>
						</Form>
						<div className='fail'>{fail}</div>
					</div>
				)}
			</div>
		</>
	);
};
export default AdminLogin;

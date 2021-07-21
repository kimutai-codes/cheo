import { Form, Input, Button, PageHeader } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import Header from '../components/header';

const Login = () => {
const [success,setSucess]= useState(false)

const url = 'http://192.168.8.101:3000/api/feeders/login';

const onFinish = (values) => {
	axios.post(url, values).then((res) => {
    if(res.data.length ){
      setSucess(true)
    }
  });
};
	return (
		<div className='form-wrapper'>
			<PageHeader className='loginheader' />
			<h1>Hello, Please Log In</h1>
			<Form onFinish={onFinish}>
				<Form.Item name='first_name'>
					<Input placeholder='Enter First Name' required></Input>
				</Form.Item>

				<Form.Item name='second_name'>
					<Input placeholder='Enter Second Name' required></Input>
				</Form.Item>

				<Form.Item name='feeder_password'>
					<Input.Password
						placeholder='Enter Password'
						required
					></Input.Password>
				</Form.Item>

				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Login
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
export default Login;

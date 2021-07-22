import { Form, Input, Button } from 'antd';
import axios from 'axios';
import Layout from '../components/Layout';

const url = 'http://192.168.8.101:3000/api/feeders/';

export const onFinish = (values) => {
	axios.post(url, values).then((res) => console.log(res));
	console.log(values);
};

const AddFeeder = () => {
	return (
		<>
			<Layout />
			<div className='form-wrapper'>
				<h1>Add Feeder</h1>
				<Form onFinish={onFinish}>
					<Form.Item name='first_name'>
						<Input placeholder='Enter First Name' required></Input>
					</Form.Item>
					<Form.Item name='second_name'>
						<Input placeholder='Enter Second Name' required></Input>
					</Form.Item>
					<Form.Item name='feeder_email'>
						<Input placeholder='Enter Email' required></Input>
					</Form.Item>
					<Form.Item name='feeder_phone'>
						<Input
							placeholder='Enter Phone Number'
							required
						></Input>
					</Form.Item>
					<Form.Item name='is_admin'>
						<Input placeholder='Make Admin?' required></Input>
					</Form.Item>
					<Form.Item name='feeder_password'>
						<Input placeholder='Make Password' required></Input>
					</Form.Item>
					<Form.Item>
						<Button type='primary' htmlType='submit'>
							Add
						</Button>
					</Form.Item>
				</Form>
			</div>
		</>
	);
};

export default AddFeeder;

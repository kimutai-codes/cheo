import { Form, Input, Button } from 'antd';

export const onFinish = (values) => {
	console.log('Success:', values);
};

const Login = () => {
	return (
		<div className='form-wrapper'>
			<Form onFinish={onFinish}>
				<Form.Item name='userID'>
					<Input placeholder='Enter User ID' required></Input>
				</Form.Item>

				<Form.Item name='username'>
					<Input placeholder='Enter User Name' required></Input>
				</Form.Item>

				<Form.Item name='password'>
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

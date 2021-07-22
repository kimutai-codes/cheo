//Iput records of the day
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import Layout from '../components/Layout';

const url = 'http://192.168.8.101:3000/api/daydata/';

export const onFinish = (values) => {
	axios.post(url, values).then((res) => console.log(res));
};

const AddDay = () => {
	return (
		<>
			<Layout />
			<div className='form-wrapper'>
				<h1>Add Day</h1>
				<Form onFinish={onFinish}>
					<Form.Item name='feed_quantity'>
						<Input
							placeholder='Enter The Feed Quantity '
							required
						></Input>
					</Form.Item>

					<Form.Item name='water_amount'>
						<Input
							placeholder='Enter Water Amount'
							required
						></Input>
					</Form.Item>

					<Form.Item name='chicken_number'>
						<Input
							placeholder='Enter Chicken Number'
							required
						></Input>
					</Form.Item>

					<Form.Item name='health'>
						<Input
							placeholder='Enter The Chicken Health'
							required
						></Input>
					</Form.Item>

					<Form.Item name='eggs_collected'>
						<Input
							placeholder='Enter The Eggs Collected'
							required
						></Input>
					</Form.Item>

					<Form.Item name='price_per_egg'>
						<Input
							placeholder='Enter The Price Per Egg'
							required
						></Input>
					</Form.Item>

					{/* TODO Make dropdown */}
					<Form.Item name='feeder_id'>
						<Input placeholder='Enter Your ID' required></Input>
					</Form.Item>

					{/* TODO Make dropdown */}
					<Form.Item name='feed_id'>
						<Input placeholder='Enter The Feed ID' required></Input>
					</Form.Item>
					<Form.Item>
						<Button type='primary' htmlType='submit'>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</>
	);
};
export default AddDay;

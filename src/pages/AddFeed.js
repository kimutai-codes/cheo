import { Form, Input, Button } from 'antd';
import axios from 'axios';
import Layout from '../components/Layout';
import { useState } from 'react';

const url = 'http://192.168.8.101:3000/api/feeds/';

const AddFeed = () => {
	const [clicked, setClicked] = useState(false);
	const onFinish = (values) => {
		axios.post(url, values).then((res) => console.log(res));
		setClicked(true);
	};

	return (
		<>
			<Layout />
			<div className='form-wrapper'>
				<h1>Add Feed</h1>

				<Form onFinish={onFinish}>
					<Form.Item name='feed_name'>
						<Input
							placeholder='Enter Name Of Feed '
							required
						></Input>
					</Form.Item>

					<Form.Item name='feed_price'>
						<Input
							placeholder='Enter Price Of Feed '
							required
						></Input>
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit'>
							Add
						</Button>
					</Form.Item>
				</Form>

				{clicked ? (
					<span className='submitted'>Form Submitted</span>
				) : null}
			</div>
		</>
	);
};

export default AddFeed;

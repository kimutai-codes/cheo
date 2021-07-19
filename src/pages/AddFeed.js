import { Form, Input, Button } from 'antd';
import { onFinish } from './Login';
const AddFeed = () => {
	return (
		<div className='form-wrapper'>
			<h1>Add Feed</h1>

			<Form onFinish={onFinish}>
				<Form.Item name='feed_name'>
					<Input placeholder='Enter Name Of Feed ' required></Input>
				</Form.Item>

				<Form.Item name='feed_price'>
					<Input placeholder='Enter Price Of Feed ' required></Input>
				</Form.Item>

				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Add
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default AddFeed;

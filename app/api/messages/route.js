import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';

export const dynamic = 'force dynamic';
//GET /api/message
export const GET = async (request) => {
	try {
		await connectDB();

		const sessionUser = await getSessionUser();

		if (!sessionUser || !sessionUser.user) {
			return new Response('User ID is required', { status: 401 });
		}

		const { userId } = sessionUser;

		const messages = await Message.find({ recipient: userId })
			.populate('sender', 'username')
			.populate('property', 'name');

		return new Response(JSON.stringify(messages), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('Something went wrong', { status: 500 });
	}
};
//POST /api messages
export const POST = async (request) => {
	try {
		await connectDB();

		const { name, email, phone, message, property, recipient } =
			await request.json();

		const sessionUser = await getSessionUser();

		if (!sessionUser || !sessionUser.user) {
			return new Response('UnautUser ID is requiredhorized', { status: 401 });
		}

		const { user } = sessionUser;

		//Can not send message to self
		if (user.id === recipient) {
			return new Response(
				JSON.stringify({ message: 'Cannot send a message to yourself' }),
				{
					status: 400,
				}
			);
		}
		//Create a new message
		const newMessage = new Message({
			sender: user.id,
			recipient,
			property,
			name,
			email,
			phone,
			body: message,
		});

		// Save message
		await newMessage.save();

		return new Response(JSON.stringify({ message: 'Message sent' }), {
			status: 200,
		});
	} catch (error) {
		return new Response(JSON.stringify({ message: error.message }), {
			status: 500,
		});
	}
};
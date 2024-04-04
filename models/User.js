import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
	{
		email: {
			type: String,
			required: [true, 'Please provide an email'],
			unique: [true, 'Email already exists'],
		},
		username: {
			type: String,
			required: [true, 'Please provide a username'],
			unique: [true, 'Username already exists'],
		},
		image: {
			type: String,
			default: 'default.jpg',
		},
		bookmarks: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Property',
			},
		],
	},
	{
		timestamps: true,
	}
);
const User = models.User || model('User', UserSchema);

export default User;

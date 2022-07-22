const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { String, ObjectId } = Schema.Types;

//user model
const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			unique: true,
			required: true,
			minlength: 5,
		},
		username: {
			type: String,
			required: true,
			minlength: 5,
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
		},
		posts: [{ type: ObjectId, ref: "Posts" }],
	},
	{
		timestamps: true,
	}
);
userSchema.set("collection", "users");
const User = mongoose.model("User", userSchema);

module.exports = User;

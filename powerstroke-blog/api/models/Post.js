const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Number, String, ObjectId } = Schema.Types;

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	section: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	likes: {
		type: Number,
		required: true,
	},
	creator: {
		type: ObjectId,
		ref: "User",
		required: true,
	},
});
postSchema.set("collection", "posts");
const Post = mongoose.model("Post", postSchema);

module.exports = Post;

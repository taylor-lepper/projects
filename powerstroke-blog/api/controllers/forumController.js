const Post = require("../models/Post");
// const User = require("../models/User");

const postCreate = async (req, res, next) => {
	console.log("postCreate fired");
	const { title, body, section, author, creator, likes } = req.body;
	console.log(title, "\n", body, "\n", section, "\n", creator);
	// const { _id } = req.user;

	try {
		let post = await Post.create({
			title,
			body,
			section,
			author,
			creator,
			likes,
		});
		if (post) {
			res.status(200).json({ message: "Post Successfully Created" });
			console.log(post);
		}
	} catch (err) {
		if (!err.statusCode) {
			err.statusCode = 500;
		}
		console.log(err);
		next(err);
	}
};

const getPosts = (req, res, next) => {
	console.log("Getting Posts");
	Post.find()
		.then((posts) => res.send(posts))
		.catch(next);
};

const postEdit = async (req, res, next) => {
	const { title, body, section, author, creator, id, likes } = req.body;
	console.log("backend edit activated");
	try {
	} catch (err) {
		if (!err.statusCode) {
			err.statusCode = 500;
		}
		console.log(err);
		next(err);
	}
	console.log("Getting Posts to edit");
	Post.updateOne(
		{ _id: id },
		{ title, body, section, author, creator, id, likes }
	)
		.then((post) => {
			console.log(post);
			res.send(post);
		})
		.catch(next);
};
const postDelete = (req, res, next) => {
	const id = req.params.id;
	Post.deleteOne({ _id: id })
		.then((deletedPost) => res.send(deletedPost))
		.catch(next);
};

module.exports = { postCreate, getPosts, postDelete, postEdit };

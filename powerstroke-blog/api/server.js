//dependencies
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

//remote files
const authRoutes = require("./routes/authRoutes.js");
const forumRoutes = require("./routes/forumRoutes.js");

//global variables
const port = 8000;
const dbURI = "mongodb://localhost:27017/powerstroke-blog";

//express app
const app = express();
app.use(cors());

//static files
app.use(express.static("public"));

//middleware

//take form data and convert it to json
app.use(express.json());

// does the same thing as the body parser, applies form data
//to the req.body object,
//allowing it to go backend
app.use(
	express.urlencoded({
		extended: true,
	})
);

//routes
app.use("/api/users", authRoutes);
app.use("/api/forums", forumRoutes);

//error handling
app.use((error, req, res, next) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	//server response
	res.status(status).json({ message, data });
});

//connect to database and start Server

mongoose
	.connect(dbURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Mongo DB connected baby!");
		app.listen(port);
		console.log(`Listening on PORT:${port}`);
	})
	.catch((err) => {
		console.log(err.message);
	});

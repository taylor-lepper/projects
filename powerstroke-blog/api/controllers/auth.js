import User from "../models/User";

const jwt = require("./jwt");

module.exports = (redirectAuthenticated = true) => {
	return function (req, res, next) {
		const token = "";
		const id = "";

		const jwtYessirNo = jwt.verifyToken(token);
		console.log(jwtYessirNo);

		User.findOne({ id })
			.then((user) => {
				req.user = user;
				next();
			})
			.catch((err) => {
				if (!redirectAuthenticated) {
					next();
					return;
				}

				next(err);
			});
	};
};

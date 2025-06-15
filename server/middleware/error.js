export const errorMiddleware = (err, req, res, next) => {
	console.log("error middleware is getting called");
	err.message ||= "Internal Server Error";
	err.statusCode ||= 500;
	return res
		.status(err.statusCode)
		.json({ success: false, message: err.message });
};
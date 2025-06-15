import { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router/user.js";
import { errorMiddleware } from "./middleware/error.js";

configDotenv();

const app = express();
app.use(express.json()); // body parser
console.log("below is the client url");
console.log(process.env.CLIENT_URL);

app.use(
	cors({
		origin: process.env.CLIENT_URL || "http://localhost:3000",
		credentials: true,
	})
);
app.use(router);

app.use("/", (req, res, next) => {
	res.send("this is the car selling platform server side code");
});

app.use(errorMiddleware);
mongoose
	.connect(process.env.MONGO_URL, {dbName:"CarEvaluation"})
	.then(() => {
		console.log(
			"connected to mongoDB and ",
			"running on the port ",
			process.env.PORT
		);
		app.listen(process.env.PORT);
	})
	.catch((err) => {
		console.log(err);
		console.log("above is the error while connecting with DB ");
	});

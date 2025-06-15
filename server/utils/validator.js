import { body, validationResult } from "express-validator";
import { ErrorHandler } from "./feature.js";

export const sendOTPValidator = () => [
	body("email", "Please Enter you Email").notEmpty(),
];
export const verifyOTPValidator = () => [
	body("otp", "Please Enter OTP").notEmpty(),
];
export const valuationFormValidator = () => [
	body("brand", "Please Enter the car brand").notEmpty(),
	body("carNumber", "Please Enter the car number").notEmpty(),
	body("email", "Please Enter your Email").notEmpty(),
	body("fuelType", "Please Enter the fuel type").notEmpty(),
	body("kilometer", "Please Enter the kilometer range").notEmpty(),
	body("location", "Please Enter the location").notEmpty(),
	body("manufacturingYear", "Please Enter the manufacturing year").notEmpty(),
	body("model", "Please Enter the car model").notEmpty(),
	body("ownershipHistory", "Please Enter the ownership history").notEmpty(),
	body("sellingTime", "Please Enter the selling time").notEmpty(),
	body("transmissionType", "Please Enter the transmission type").notEmpty(),
	body("variant", "Please Enter the car variant").notEmpty(),
];
export const validateHandler = (req, res, next) => {
	const errors = validationResult(req);
	console.log(errors);
	const errorMessage = errors
		.array()
		.map((err) => err.msg)
		.join();
	console.log(errorMessage);
	if (errors.isEmpty()) {
		return next();
	} else {
		console.log("validate handler is working");
		next(new ErrorHandler(errorMessage, 400));
	}
};

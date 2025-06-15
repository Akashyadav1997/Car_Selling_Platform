import { sendOTPToEmail } from "../middleware/mail.js";
import { ValuationForm } from "../models/valuation.js";
import { ErrorHandler } from "../utils/feature.js";

let otps = {};
console.log("list of my otps");
console.log(otps);

const generateOtp = () => {
	const otp = Math.floor(1000 + Math.random() * 9000);
	const expirationTime = Date.now() + 5 * 60 * 1000;
	otps[otp] = expirationTime;
	return otp;
};
const removeExpiredOtp = () => {
	const currentTime = Date.now();
	for (const otp in otps) {
		if (otps.hasOwnProperty(otp)) {
			if (otps[otp] <= currentTime) {
				// console.log(otp, "otp is now removed");
				delete otps[otp];
			}
		}
	}
};
export const sendOTP = async (req, res, next) => {
	try {
		const { email } = req.body;
		console.log("this is email received", email);

		if (!email) {
			return next(new ErrorHandler("Could not found Email", 400));
		}
		let otp = generateOtp();
		sendOTPToEmail(email, otp).then(() => {
			return res.status(200).json({
				success: true,
				message: `OTP has been send to ${email} `,
			});
		});
	} catch (error) {
		return next(new ErrorHandler(error));
	}
};

export const verifyOTP = async (req, res, next) => {
	console.log("verify otp router calleeddddd");

	try {
		console.log("verify otp route and data is below");
		console.log(req.body);
		const otp = parseInt(req.body.otp);
		const receivedOtp = otps.hasOwnProperty(otp);
		if (!receivedOtp)
			return next(new ErrorHandler("Otp is incorrect, Please try again"));
		return res.status(200).json({
			message: "OTP has been verified successfully",
			success: true,
		});
	} catch (err) {
		return next(new ErrorHandler(err));
	}
};

export const valuationForm = async (req, res, next) => {
	try {
		const {
			brand,
			carNumber,
			email,
			fuelType,
			kilometer,
			location,
			manufacturingYear,
			model,
			ownershipHistory,
			sellingTime,
			transmissionType,
			variant,
		} = req.body;
		console.log("Received valuation form data:", req.body);

		const valuation = new ValuationForm({
			brand,
			carNumber,
			email,
			fuelType,
			kilometer,
			location,
			manufacturingYear,
			model,
			ownershipHistory,
			sellingTime,
			transmissionType,
			variant,
		});

		await valuation.save();

		return res.status(200).json({
			success: true,
			message: "Valuation form submitted successfully",
			data: valuation,
		});
	} catch (err) {
		return next(new ErrorHandler(err));
	}
};

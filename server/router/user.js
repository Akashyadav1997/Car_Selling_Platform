import express from "express";
import {
	sendOTPValidator,
	validateHandler,
	valuationFormValidator,
	verifyOTPValidator,
} from "../utils/validator.js";
import { sendOTP, valuationForm, verifyOTP } from "../controllers/user.js";
const router = express.Router();

router.post("/sendOTP", sendOTPValidator(), validateHandler, sendOTP);
router.post("/verifyOTP", verifyOTPValidator(), validateHandler, verifyOTP);
router.post(
	"/valuationFormSubmit",
	valuationFormValidator(),
	validateHandler,
	valuationForm
);
export default router;

import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// create your transporter here to send email
const transporter = nodemailer.createTransport({
	service: "gmail",
	// host: "smtp.gmail.com",
	port: 587,
	secure: false, // Use `true` for port 465, `false` for all other ports
	auth: {
		user: process.env.USER_EMAIL,
		pass: process.env.USER_PASSWORD,
	},
});
export const sendOTPToEmail = async (email, otp) => {
	console.log("sending otp ");
	try {
		await transporter.sendMail({
			from: {
				name: "Akash Yadav",
				address: process.env.USER_EMAIL,
			},
			to: email,
			subject: "Account Verification From Spinny Car Selling platform", // Subject line
			text: `Hello your OTP is ${otp}`, // plain text body
			html: `<div><br/> Hello Your OTP is ${otp}<br/> <br/> Please Verify your account by entering the OTP mentioned above </div>`,
		});
	} catch (err) {
		console.log(err);
	}
};

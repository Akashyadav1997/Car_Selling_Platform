"use client";
import React, { useRef, useState } from "react";
import { RiLoader2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const VerificationForm = () => {
	const [getOtp, setGetOTP] = useState(false);
	const [verifyOTP, setVerifyOTP] = useState(false);
	const [emailVerified, setEmailVerified] = useState(false);
	const [submitBtn, setSubmitBtn] = useState(false);
	const [userDetails, setUserDetails] = useState({
		email: "",
		carNumber: "",
		otp: "",
	});

	const handleOTPChange = (e) => {
		setUserDetails((data) => ({ ...data, otp: e.target.value }));
	};
	const { submissionValues } = useSelector((state) => state.newUser);
	console.log("below is the redux values from verification form");
	console.log(submissionValues);

	console.log("below is the server url");
	console.log(process.env.NEXT_PUBLIC_SERVER_URL);

	const handleSendOTP = async () => {
		try {
			setGetOTP(true);
			const result = await fetch(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/sendOTP`,
				{
					headers: {
						"Content-Type": "application/json",
					},
					method: "POST",
					body: JSON.stringify({ email: userDetails.email }),
				}
			);
			const response = await result.json();
			console.log(response);
			if (response.success) {
				toast.success(response.message);
			} else {
				toast.error(response.message);
				console.log("OTP SENDING FAILED", response);
			}
		} catch (error) {
			console.error("Error sending OTP:", error);
			toast.error(error);
		} finally {
			setGetOTP(false); // Stop loading
		}
	};

	const handleVerifyOTP = async () => {
		try {
			setVerifyOTP(true);
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/verifyOTP`,
				{
					headers: {
						"Content-Type": "application/json",
					},
					method: "POST",
					body: JSON.stringify({ otp: userDetails.otp }),
				}
			);
			const result = await response.json();
			if (result.success) {
				setEmailVerified(true);
				toast.success(result.message);
			} else {
				toast.error(result.message);
			}
		} catch (err) {
			toast.error(err);
		} finally {
			setVerifyOTP(false);
		}
	};
	const handleFormSubmission = async () => {
		try {
			if (!emailVerified) {
				toast.error("Kindly verify your email first");
				return;
			}
			console.log("yeah im working now");

			setSubmitBtn(true);
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/valuationFormSubmit`,
				{
					headers: {
						"Content-Type": "application/json",
					},
					method: "POST",
					body: JSON.stringify({
						...submissionValues,
						email: userDetails.email,
						carNumber: userDetails.carNumber.trim(),
					}),
				}
			);

			const result = await response.json();
			console.log("below is the result");
			console.log(result);

			if (result.success) {
				toast.success(result.message);
				window.location.reload();
			} else {
				toast.error(result.message);
			}
		} catch (err) {
			toast.error(err);
		} finally {
			setSubmitBtn(false);
		}
	};
	console.log("below is the user details");
	console.log(userDetails);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className=" overflow-y-auto max-h-[30rem]"
		>
			<h4 className=" capitalize text-xs mt-8">one last step</h4>
			<h1 className="font-bold my-3">
				Verifty your Email Address to see your car valuation
			</h1>
			<div className="w-full flex">
				<input
					type="text"
					placeholder="Enter your email id"
					className="w-5/8 ring-gray-200 rounded ring my-3 mx-2 p-3"
					onChange={(e) =>
						setUserDetails((data) => ({ ...data, email: e.target.value }))
					}
				/>
				<button
					className=" uppercase font-bold text-xs w-3/8 flex justify-center  bg-rose-400 items-center my-3 px-15  hover:bg-rose-600 cursor-pointer text-white rounded"
					onClick={handleSendOTP}
					// disabled={submitHandler}
				>
					{getOtp ? (
						<RiLoader2Line size={25} className=" animate-spin capitalize" />
					) : (
						"get otp"
					)}
				</button>
			</div>
			<div className="flex w-full">
				<input
					type="number"
					placeholder="Enter 4 digit OTP "
					className="w-5/8 ring-gray-200 rounded ring my-3 mx-2 p-3"
					// value={otp.current}
					onChange={(e) => handleOTPChange(e)}
				/>
				<button
					className=" uppercase font-bold text-xs w-3/8 flex justify-center  bg-blue-400 items-center my-3 px-15  hover:bg-blue-600 cursor-pointer text-white rounded"
					onClick={handleVerifyOTP}
				>
					{verifyOTP ? (
						<RiLoader2Line size={25} className=" animate-spin capitalize" />
					) : (
						"Verify OTP"
					)}
				</button>
			</div>
			<div className="flex w-full">
				<input
					type="text"
					className="w-5/8 ring-gray-200 rounded ring my-3 mx-2 p-3"
					placeholder="Enter you car Number"
					onChange={(e) =>
						setUserDetails((data) => ({ ...data, carNumber: e.target.value }))
					}
				/>
				<button
					className=" uppercase font-bold text-xs w-3/8 flex justify-center  bg-green-400 items-center my-3 px-15  hover:bg-green-600 cursor-pointer text-white rounded"
					onClick={handleFormSubmission}
				>
					{submitBtn ? (
						<RiLoader2Line size={25} className=" animate-spin capitalize" />
					) : (
						"Submission"
					)}
				</button>
			</div>
		</motion.div>
	);
};

export default VerificationForm;

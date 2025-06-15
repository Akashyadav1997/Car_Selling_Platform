import React, { useState } from "react";
import { RiLoader2Line } from "react-icons/ri";

const VerificationForm = () => {
	const [submitBtn, setSubmitBtn] = useState(false);
	const submitHandler = () => {
		setSubmitBtn((value) => !value);
	};
	return (
		<div className=" overflow-y-auto max-h-[30rem]">
			<h4 className=" capitalize text-xs mt-8">one last step</h4>
			<h1 className="font-bold my-3">
				Verifty your Email Address to see your car valuation
			</h1>
			<div className="w-full flex">
				<input
					type="text"
					placeholder="Enter your email id"
					className="w-5/8 ring-gray-200 rounded ring my-3 mx-2 p-3"
				/>
				<button
					className=" uppercase font-bold text-xs w-3/8 flex justify-center  bg-rose-400 items-center my-3 px-15  hover:bg-rose-600 cursor-pointer text-white rounded"
					onClick={submitHandler}
					// disabled={submitBtn}
				>
					{submitBtn ? (
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
				/>
				<button
					className=" uppercase font-bold text-xs w-3/8 flex justify-center  bg-blue-400 items-center my-3 px-15  hover:bg-blue-600 cursor-pointer text-white rounded"
					onClick={submitHandler}
					// disabled={submitBtn}
				>
					{submitBtn ? (
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
				/>
				<button
					className=" uppercase font-bold text-xs w-3/8 flex justify-center  bg-green-400 items-center my-3 px-15  hover:bg-green-600 cursor-pointer text-white rounded"
					onClick={submitHandler}
					// disabled={submitBtn}
				>
					{submitBtn ? (
						<RiLoader2Line size={25} className=" animate-spin capitalize" />
					) : (
						"Submission"
					)}
				</button>
			</div>
		</div>
	);
};

export default VerificationForm;

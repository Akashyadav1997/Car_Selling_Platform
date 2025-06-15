"use client";
import {
	increaseCurrentSteps,
	updateInputValues,
	updateSubmissionValues,
} from "@/app/redux/slices/newUser";
import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const ownershipOptions = [
	"1st owner",
	"2nd owner",
	"3rd owner",
	"4th owner",
	"Beyond 4th owner",
	"I am a car dealer",
];

const CarOwnerShipForm = ({ setCurrentStep }) => {
	const dispatch = useDispatch();
	const handleSelectOwner = (value) => {
		console.log(value);
		setCurrentStep((value) => value + 1);
		dispatch(updateInputValues({ index: 7, value: value }));
		dispatch(increaseCurrentSteps({ value: 7 }));
		dispatch(
			updateSubmissionValues({ name: "ownershipHistory", value: value })
		);
	};
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className=" overflow-y-scroll max-h-[30rem]"
		>
			<div className="relative my-3 mx-6 ">
				<h2 className="text-sm">
					Select the <b>Ownership History</b> of your car
				</h2>
			</div>
			<div className="flex flex-col">
				{ownershipOptions.map((item, index) => (
					<span
						key={index}
						className=" text-center p-3 bg-gray-200 my-2 text-xs hover:bg-gray-400 cursor-pointer rounded"
						onClick={() => handleSelectOwner(item)}
					>
						{item}
					</span>
				))}
			</div>
		</motion.div>
	);
};

export default CarOwnerShipForm;

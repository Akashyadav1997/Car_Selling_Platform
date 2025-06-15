"use client";
import {
	increaseCurrentSteps,
	updateInputValues,
	updateSubmissionValues,
} from "@/app/redux/slices/newUser";
import React from "react";
import { useDispatch } from "react-redux";

const kilometerRanges = [
	"0 Km - 10,000 Km",
	"10,000 Km - 20,000 Km",
	"20,000 Km - 30,000 Km",
	"30,000 Km - 40,000 Km",
	"40,000 Km - 50,000 Km",
	"50,000 Km - 60,000 Km",
	"60,000 Km - 70,000 Km",
	"70,000 Km - 80,000 Km",
	"80,000 Km - 90,000 Km",
	"90,000 Km - 1,00,000 Km",
	"1,00,000 Km - 1,25,000 Km",
	"1,25,000 Km - 1,50,000 Km",
	"1,50,000 Km - 1,75,000 Km",
	"1,75,000 Km - 2,00,000 Km",
	"2,00,000 Km - 2,25,000 Km",
	"2,25,000 Km - 2,50,000 Km",
	"2,50,000 Km or more",
];

const KilometerForm = ({ setCurrentStep }) => {
	const dispatch = useDispatch();
	const handleSelectRange = (data) => {
		console.log(data);
		setCurrentStep((value) => value + 1);
		dispatch(updateInputValues({ index: 8, value: data }));
		dispatch(increaseCurrentSteps({ value: 8 }));
		dispatch(updateSubmissionValues({ name: "kilometer", value: data }));
	};
	return (
		<div className=" overflow-y-auto max-h-[25rem]">
			<div className="relative my-3 mx-6 ">
				<h2 className="text-sm">
					Select the <b>kilometers driven</b> by your car
				</h2>
			</div>
			<div className="flex flex-col max-h-[15rem]">
				{kilometerRanges.map((data, index) => (
					<span
						key={index}
						className="text-center p-3 rounded-lg bg-gray-100 hover:bg-gray-300 cursor-pointer my-2 mx-3"
						onClick={() => handleSelectRange(data)}
					>
						{data}
					</span>
				))}
			</div>
		</div>
	);
};

export default KilometerForm;

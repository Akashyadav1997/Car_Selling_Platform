import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";
import { generateYears } from "@/lib/helper";
import { useDispatch } from "react-redux";
import {
	increaseCurrentSteps,
	updateInputValues,
	updateSubmissionValues,
} from "@/app/redux/slices/newUser";
import { motion } from "framer-motion";

// create a list of years as the third party calendar is too tricky to render this simple years list
const currentYear = new Date().getFullYear();
let years = [];
years = generateYears(currentYear, 15, years);

const ManufacturingYearForm = ({ setCurrentStep }) => {
	const [yearsList, setYearsList] = useState(years);
	const dispatch = useDispatch();
	const handleSearchItem = (e) => {
		// console.log(e.target.value);
		let value = e.target.value.trim();
		if (value == "") {
			return setYearsList(years);
		}
		let updatedYears = [];
		updatedYears = yearsList.filter((item) => {
			return item.toString().includes(value);
		});
		console.log("below is the udpated years");
		console.log(updatedYears);
		setYearsList(updatedYears);
	};
	const handleOldAgeVehicle = () => {
		alert("Sorry ! We don't deal with the vehicle before 2010");
	};
	const handleYearsClick = (value) => {
		console.log(value);
		dispatch(updateInputValues({ index: 2, value: value }));
		dispatch(increaseCurrentSteps({ value: 4 }));
		dispatch(
			updateSubmissionValues({ name: "manufacturingYear", value: value })
		);

		setCurrentStep((value) => value + 1);
	};
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<div className="relative my-3 mx-6 ">
				<h2 className="text-sm">
					Select the <b>Manufaturing Year</b> of your car
				</h2>
				<input
					type="number"
					className="w-full ring-1 ring-gray-300 p-2 rounded-lg my-3"
					placeholder="Search your year"
					onChange={handleSearchItem}
				/>
				<FaSearch className="absolute top-10 right-3" size={25} color="gray" />
			</div>
			<h3 className=" text-xs underline my-3 ml-1 font-semibold">
				Choose year from below list
			</h3>
			<div className="grid grid-cols-4 gap-3 overflow-y-scroll max-h-[15rem] max-w-[45rem]">
				{yearsList.map((item, index) => (
					<span
						key={index}
						className=" bg-[#f1f1f1] p-2 rounded text-center hover:bg-gray-300 cursor-pointer py-4 ]"
						onClick={() => handleYearsClick(item)}
					>
						{item}
					</span>
				))}
				<span
					className=" bg-[#f1f1f1] p-2 rounded text-center hover:bg-red-300 cursor-pointer"
					onClick={handleOldAgeVehicle}
				>
					2010 or Older
				</span>
			</div>
		</motion.div>
	);
};

export default ManufacturingYearForm;

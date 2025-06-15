"use client";
import {
	increaseCurrentSteps,
	updateInputValues,
	updateSubmissionValues,
} from "@/app/redux/slices/newUser";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const carModels = [
	"Baleno",
	"Swift",
	"Wagon R 1.0",
	"Alto 800",
	"Alto K10",
	"Celerio",
	"Celerio X",
	"Ciaz",
	"Dzire",
	"Eeco",
	"Ertiga",
	"Gypsy",
	"Ignis",
	"New Ertiga",
	"Omni",
	"S-Cross",
	"Swift Dzire",
	"Vitara Brezza",
	"Wagon R",
	"Wagon R 1.2",
	"Wagon R Stingray",
];

const CarModelForm = ({ setCurrentStep }) => {
	const [carList, setCarListItem] = useState(carModels);
	const dispatch = useDispatch();
	const handleSearchItem = (e) => {
		console.log(e.target.value);
		const value = e.target.value.trim();
		if (value == "") {
			return setCarListItem(carModels);
		}
		let newArray = carList.filter((item) => {
			return item.toLowerCase().includes(value);
		});
		setCarListItem(newArray);
	};
	const handleModelClick = (car) => {
		dispatch(updateInputValues({ index: 3, value: car }));
		setCurrentStep((value) => value + 1);
		dispatch(increaseCurrentSteps({ value: 5 }));
		dispatch(updateSubmissionValues({ name: "model", value: car }));
	};
	return (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
			<div className="relative my-3 mx-6 ">
				<h2 className="text-sm">
					Select the <b>Model</b> of your car
				</h2>
				<input
					type="text"
					className="w-full ring-1 ring-gray-300 p-2 rounded-lg my-3"
					placeholder="Search your Model"
					onChange={handleSearchItem}
				/>
				<FaSearch className="absolute top-10 right-3" size={25} color="gray" />
			</div>
			<div className="grid grid-cols-3 gap-3 overflow-y-scroll max-h-[15rem] max-w-[45rem]">
				{carList.map((item, index) => (
					<span
						key={index}
						className="text-center bg-[#f1f1f1] p-3 py-6 rounded-lg hover:bg-gray-200 cursor-pointer"
						onClick={() => handleModelClick(item)}
					>
						{item}
					</span>
				))}
			</div>
		</motion.div>
	);
};

export default CarModelForm;

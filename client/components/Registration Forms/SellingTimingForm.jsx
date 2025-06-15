import {
	increaseCurrentSteps,
	updateInputValues,
	updateSubmissionValues,
} from "@/app/redux/slices/newUser";
import React from "react";
import { useDispatch } from "react-redux";

const purchaseTimings = [
	"Immediately",
	"Within a month",
	"After a month",
	"Just checking price",
];

const SellingTimingForm = ({ setCurrentStep }) => {
	const dispatch = useDispatch();
	const handleSubmit = (data) => {
		console.log(data);
		setCurrentStep((value) => value + 1);
		dispatch(updateInputValues({ index: 9, value: data }));
		dispatch(increaseCurrentSteps({ value: 9 }));
		dispatch(updateSubmissionValues({ name: "sellingTime", value: data }));
	};
	return (
		<div className=" overflow-y-auto max-h-[30rem]">
			<div className="relative my-3 mx-6 ">
				<h2 className="text-sm">
					Select the <b>want to sell</b> by your car
				</h2>
			</div>
			<div className="flex flex-col">
				{purchaseTimings.map((item, index) => (
					<span
						key={index}
						className="text-center p-3 rounded-lg bg-gray-100 hover:bg-gray-300 cursor-pointer my-2 mx-3"
						onClick={() => handleSubmit(item)}
					>
						{item}
					</span>
				))}
			</div>
		</div>
	);
};

export default SellingTimingForm;

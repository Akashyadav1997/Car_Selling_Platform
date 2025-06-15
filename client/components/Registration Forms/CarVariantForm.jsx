import {
	increaseCurrentSteps,
	updateInputValues,
	updateSubmissionValues,
} from "@/app/redux/slices/newUser";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const carVariants = [
	"LX [2010 - 2019]",
	"LXI [2010 - 2019]",
	"LXI (O) [2010 - 2019]",
	"LXI ABS [2010 - 2019]",
	"VXI [2010 - 2019]",
	"VXI (O) [2010 - 2019]",
	"VXI ABS [2010 - 2019]",
	"Felicity Edition [2016 - 2018]",
	"LXI AVANCE EDITION [2014 - 2019]",
	"LXI CNG Limited Edition [2013 - 2019]",
	"VXI Madhavan Signature edition [2010 - 2019]",
	"VXI+ (O) Petrol MT [2015 - 2019]",
	"VXI+ Petrol MT [2015 - 2019]",
];

const CarVariantForm = ({ setCurrentStep }) => {
	const [variantDetails, setVariantDetails] = useState({
		fuelType: "",
		transmission: "",
		variant: "",
	});
	const dispatch = useDispatch();
	console.log(variantDetails);

	const handleFuelTypeClick = (type) => {
		if (type === "cng") {
			setVariantDetails((data) => ({ ...data, fuelType: "cng" }));
			dispatch(updateInputValues({ index: 4, value: "cng" }));
		} else {
			setVariantDetails((data) => ({ ...data, fuelType: "petrol" }));
			dispatch(updateInputValues({ index: 4, value: "petrol" }));
		}
		dispatch(updateSubmissionValues({ name: "fuelType", value: type }));
	};
	const handleTransmissionClick = (type) => {
		if (type === "manual") {
			setVariantDetails((data) => ({
				...data,
				transmission: "manual",
			}));
			dispatch(updateInputValues({ index: 5, value: "manual" }));
		} else {
			setVariantDetails((data) => ({
				...data,
				transmission: "automatic",
			}));
			dispatch(updateInputValues({ index: 5, value: "automatic" }));
		}
		dispatch(updateSubmissionValues({ name: "transmissionType", value: type }));
	};
	const handleVariantClick = (value) => {
		setVariantDetails((data) => ({ ...data, variant: value }));
		dispatch(updateInputValues({ index: 6, value: value }));
		setCurrentStep((value) => value + 1);
		dispatch(increaseCurrentSteps({ value: 6 }));
		dispatch(updateSubmissionValues({ name: "variant", value: value }));
	};
	return (
		<div className=" overflow-y-scroll max-h-[30rem]">
			<div className="relative my-3 mx-6 ">
				<h2 className="text-sm">
					Select the <b>Variant</b> of your car
				</h2>
				<h4 className=" font-stretch-75% uppercase text-xs my-8">
					select the fuel type
				</h4>
				{/* select Fuel type */}
				<div className="flex w-full ">
					<span
						className={` p-4 w-3/6 flex flex-col justify-center items-center ${
							variantDetails.fuelType === "petrol" ? "bg-amber-400" : ""
						}   bg-amber-100 hover:bg-amber-300 cursor-pointer  mx-1 py-6 rounded-xl`}
						onClick={() => handleFuelTypeClick("petrol")}
					>
						<Image
							src={"/gasstation.png"}
							width={40}
							height={40}
							alt="No Image Found"
						/>
						<span>Petrol</span>
					</span>
					<span
						className={`p-4 w-3/6 flex flex-col items-center justify-center ${
							variantDetails.fuelType === "cng" ? "bg-green-400" : ""
						} bg-green-200 hover:bg-green-400 cursor-pointer mx-1 py-6 rounded-xl`}
						onClick={() => handleFuelTypeClick("cng")}
					>
						<Image
							src={"/gasstation.png"}
							width={40}
							height={40}
							alt="No Image Found"
						/>
						<span>CNG</span>
					</span>
				</div>
				{/* select the manual type  */}
				{variantDetails.fuelType && (
					<div className="mt-8">
						<span className=" uppercase font-stretch-75% text-xs  ">
							select transmission
						</span>
						<div className="flex mt-2 capitalize">
							<div
								className={`flex flex-col w-3/6 items-center ${
									variantDetails.transmission === "manual"
										? "bg-blue-500 text-white"
										: "bg-gray-200"
								}  p-3 py-5 hover:ring-2 ring-blue-800 cursor-pointer mx-3 rounded-lg`}
								onClick={() => handleTransmissionClick("manual")}
							>
								<Image
									src={"/manualTransmission.png"}
									width={40}
									height={40}
									alt="No Image Found"
								/>
								<span className="text-xs mt-3">manual</span>
							</div>
							<div
								className={`flex flex-col items-center w-3/6 ${
									variantDetails.transmission === "automatic"
										? "bg-blue-500 text-white"
										: "bg-gray-200"
								}  p-3 py-5 hover:ring-2 ring-blue-800 cursor-pointer mx-3 rounded-lg`}
								onClick={() => handleTransmissionClick("automatic")}
							>
								<Image
									src={"/autmaticTransmission.png"}
									width={40}
									height={40}
									alt="No Image Found"
								/>
								<span className="text-xs mt-3">automatic </span>
							</div>
						</div>
					</div>
				)}
				{variantDetails.transmission && (
					<div className="my-6">
						<span className=" uppercase font-stretch-75% text-xs  ">
							select variant
						</span>
						<div className="flex flex-col">
							{carVariants.map((item, index) => (
								<div
									onClick={() => handleVariantClick(item)}
									key={index}
									className={` w-full text-xs text-center p-2 bg-[#f1f1f1] my-2 rounded-lg cursor-pointer hover:bg-gray-400 hover:text-white`}
								>
									{item}
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CarVariantForm;

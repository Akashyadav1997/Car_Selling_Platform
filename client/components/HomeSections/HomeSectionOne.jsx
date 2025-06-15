"use client";
import Modal from "@/app/utils/FormModal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Geist, Inter, Montserrat } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import LocationForm from "../Registration Forms/BrandForm";
import FormContainer from "../Registration Forms/FormContainer";
import { useSelector } from "react-redux";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: "500",
});
const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const geist = Geist({
	subsets: ["latin"],
	// weight: ["600"],
});
const HomeSectionOne = () => {
	const [showModal, setShowModal] = useState(false);
	const { currentSteps, inputValues, submissionValues } = useSelector(
		(state) => state.newUser
	);
	console.log("below is the redux data from new user");
	console.log(submissionValues);

	return (
		<div
			className="text-black flex items-center flex-col justify-center h-screen headerBackgroundImage"
			style={{
				// backgroundImage: "url('/backgroundImage.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "100vh",
			}}
		>
			{showModal && (
				<Modal setShowModal={setShowModal}>
					{/* <LocationForm /> */}
					<FormContainer />
				</Modal>
			)}
			<Image
				src={
					"https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SellCar/assets/sell_right_new.svg?q=85&w=123"
				}
				height={130}
				width={130}
				alt="Picture not found"
				className=""
			/>
			<h2 className="mt-8 font-bold text-5xl text-white">
				Check your car Price in 10 secs{" "}
			</h2>

			<i className={`${inter.className} capitalize text-sm text-gray-300 my-8`}>
				your car details
			</i>
			<div
				className={`grid lg:grid-cols-9 text-sm ${geist.className} divide-x divide-gray-200 `}
			>
				<div
					className="flex flex-col cursor-pointer bg-white p-3 rounded-l-xl "
					onClick={() => setShowModal(true)}
				>
					<label
						htmlFor="location"
						className=" font-bold text-xs cursor-pointer underline"
					>
						RTO Location
					</label>
					<span className="text-[14px] text-gray-700 font-bold">
						{submissionValues.location || "Delhi NCR"}
					</span>
				</div>
				<div
					className="flex flex-col bg-white items-center justify-center cursor-pointer"
					onClick={() => setShowModal(true)}
				>
					{submissionValues.manufacturingYear ? (
						<span className="text-[14px] text-gray-700 font-bold">
							{submissionValues.manufacturingYear}
						</span>
					) : (
						<label
							htmlFor="year"
							className="font-bold text-md text-gray-400 cursor-pointer"
						>
							Year
						</label>
					)}
				</div>
				<div
					className="bg-white flex items-center justify-center cursor-pointer"
					onClick={() => setShowModal(true)}
				>
					{submissionValues.brand ? (
						<span className="text-[14px] text-gray-700 font-bold">
							{submissionValues.brand}
						</span>
					) : (
						<label
							htmlFor="brand"
							className="font-bold cursor-pointer text-gray-400"
						>
							Brand
						</label>
					)}
				</div>
				<div
					className={` bg-white items-center flex justify-center cursor-pointer`}
					onClick={() => setShowModal(true)}
				>
					{submissionValues.model ? (
						<span className="text-[14px] text-gray-700 font-bold">
							{submissionValues.model}
						</span>
					) : (
						<label
							htmlFor="model"
							className="font-bold cursor-pointer text-gray-400"
						>
							Model
						</label>
					)}
				</div>
				<div
					className="bg-white flex justify-center items-center cursor-pointer"
					onClick={() => setShowModal(true)}
				>
					{submissionValues.variant ? (
						<span className="text-[10px] text-gray-700 font-bold">
							{submissionValues.variant}
						</span>
					) : (
						<label
							htmlFor="variant"
							className=" cursor-pointer font-bold text-gray-400"
						>
							Variant
						</label>
					)}
				</div>
				<div
					className="bg-white flex justify-center items-center cursor-pointer"
					onClick={() => setShowModal(true)}
				>
					{submissionValues.ownershipHistory ? (
						<span className="text-[15px] text-gray-700 font-bold">
							{submissionValues.ownershipHistory}
						</span>
					) : (
						<label
							htmlFor="owner"
							className=" cursor-pointer font-bold text-gray-400"
						>
							Owner
						</label>
					)}
				</div>
				<div
					className="bg-white  flex justify-center items-center cursor-pointer"
					onClick={() => setShowModal(true)}
				>
					{submissionValues.kilometer ? (
						<span className="text-[10px] text-gray-700 font-bold">
							{submissionValues.kilometer}
						</span>
					) : (
						<label
							htmlFor="km"
							className="font-bold cursor-pointer text-gray-400"
						>
							KM Driven
						</label>
					)}
				</div>
				{/* <div className="items-center bg-[#ed264f]"> */}
				<button
					className={`bg-[#ed264f] hover:bg-[#c11f42] lg:col-span-2 duration-300 flex items-center justify-center cursor-pointer ${montserrat.className} px-4 rounded-r-xl`}
					onClick={() => setShowModal(true)}
				>
					<span className="mr-1 uppercase font-bold text-gray-200">
						Continue
					</span>{" "}
					<FaArrowRight color="white" />
				</button>
				{/* </div> */}
			</div>
		</div>
	);
};

export default HomeSectionOne;

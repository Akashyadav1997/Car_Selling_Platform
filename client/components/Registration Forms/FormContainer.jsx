import React, { useState } from "react";
import BrandForm from "./BrandForm";
import LocationForm from "./LocationForm";
import ManufacturingYearForm from "./ManufacturingYearForm";
import CarModelForm from "./CarModelForm";
import CarVariantForm from "./CarVariantForm";
import CarOwnerShipForm from "./CarOwnerShipForm";
import KilometerForm from "./KilometerForm";
import SellingTimingForm from "./SellingTimingForm";
import VerificationForm from "./VerificationForm";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const FormContainer = () => {
	const [currentStep, setCurrentStep] = useState(1);
	//redux store variables
	const newUser = useSelector((state) => state.newUser);
	const dispatch = useDispatch();
	console.log("below is the my reudux new user value");
	console.log(newUser.inputValues);

	const renderForm = () => {
		switch (currentStep) {
			case 1:
				return <BrandForm setCurrentStep={setCurrentStep} />;
			case 2:
				return <LocationForm setCurrentStep={setCurrentStep} />;
			case 3:
				return <ManufacturingYearForm setCurrentStep={setCurrentStep} />;
			case 4:
				return <CarModelForm setCurrentStep={setCurrentStep} />;
			case 5:
				return <CarVariantForm setCurrentStep={setCurrentStep} />;
			case 6:
				return <CarOwnerShipForm setCurrentStep={setCurrentStep} />;
			case 7:
				return <KilometerForm setCurrentStep={setCurrentStep} />;
			case 8:
				return <SellingTimingForm setCurrentStep={setCurrentStep} />;
			case 9:
				return <VerificationForm />;
		}
	};
	const handleBackButton = () => {
		if (currentStep == 1) {
			return;
		}
		setCurrentStep((value) => value - 1);
	};
	return (
		<div className="relative">
			{newUser.inputValues.length > 0 && (
				<div className="absolute top-[-3rem] left-[-4rem] w-screen">
					{newUser.inputValues.map((item, index) => (
						<span key={index} className="mx-1 bg-gray-100 p-1 px-2 py-2 rounded text-xs font-bold">{item}</span>
					))}
				</div>
			)}
			<header className="flex justify-between items-center">
				<span>
					<BsArrowLeft
						size={35}
						className="cursor-pointer"
						onClick={handleBackButton}
					/>
				</span>
				<span className="font-mono">{currentStep}/9</span>
			</header>
			{renderForm()}
		</div>
	);
};

export default FormContainer;

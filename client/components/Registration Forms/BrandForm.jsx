"use client";
import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsArrowLeft } from "react-icons/bs";

import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { Poppins } from "next/font/google";
import {
	increaseCurrentSteps,
	updateInputValues,
	updateSubmissionValues,
} from "@/app/redux/slices/newUser";
import Image from "next/image";
import { useDispatch } from "react-redux";
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300"],
});
const listOfBrands = [
	{
		name: "Audi",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/audi/logos/v1.png",
	},
	{
		name: "BMW",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/bmw/logos/v1.png",
	},
	{
		name: "Chevrolet",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/chevrolet/logos/chevrolet.webp",
	},
	{
		name: "Citroen",
		image:
			"https://mda.spinny.com/sp-file-system/public/2024-09-16/aa761b62253847748114a897c54b23ae/raw/Citroen-logo-2009-2048x2048.png.png",
	},
	{
		name: "Datsun",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/datsun/logos/v1.webp",
	},
	{
		name: "Fiat",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/fiat/logos/fiat.webp",
	},
	{
		name: "Ford",
		image:
			"https://spn-sta.spinny.com/spinny-web/oth/raMicD2JTFa1JOLFZewdpg/raw/file.webp",
	},
	{
		name: "Honda",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/honda/logos/honda.webp",
	},
	{
		name: "Hyundai",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/hyundai/logos/hyundai.webp",
	},
	{
		name: "Jaguar",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/jaguar/logos/v1.webp",
	},
	{
		name: "Jeep",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/jeep/logos/v1.png",
	},
	{
		name: "KIA",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/kia/logos/v1.webp",
	},
	{
		name: "Land Rover",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/land-rover/logos/v1.png",
	},
	{
		name: "Mahindra",
		image:
			"https://spn-sta.spinny.com/spinny-web/oth/8GlhsoBSSg6L5A%2Bq6dAfiA/raw/file.webp",
	},
	{
		name: "Maruti Suzuki",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/maruti-suzuki/logos/maruti-suzuki.webp",
	},
	{
		name: "Mercedes",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/mercedes-benz/logos/v1.png",
	},
	{
		name: "MG",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/mg-motors/logos/v1.png",
	},
	{
		name: "MINI",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/mini/logos/v1.png",
	},
	{
		name: "Mitsubishi",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/mitsubishi/logos/v1.webp",
	},
	{
		name: "Nissan",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/nissan/logos/nissan.webp",
	},
	{
		name: "Renault",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/renault/logos/renault.webp",
	},
	{
		name: "Skoda",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/skoda/logos/skoda.webp",
	},
	{
		name: "Tata",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/tata/logos/tata.webp",
	},
	{
		name: "Tata EV",
		image:
			"https://mda.spinny.com/sp-file-system/public/2024-06-07/36f9ba4cc54946858cd038b45d290982/raw/tataev(1).png.png",
	},
	{
		name: "Toyota",
		image:
			"https://spn-sta.spinny.com/spinny-web/oth/T8mdDiRQRJeaJwhsjumEdA/raw/file.webp",
	},
	{
		name: "Volkswagen",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/volkswagen/logos/volkswagen.webp",
	},
	{
		name: "Volvo",
		image:
			"https://mda.spinny.com/spinny-web/media/cars/makes/volvo/logos/v1.png",
	},
];
const BrandForm = ({ setCurrentStep }) => {
	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = useState([
		{
			name: "Audi",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/audi/logos/v1.png",
		},
		{
			name: "BMW",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/bmw/logos/v1.png",
		},
		{
			name: "Chevrolet",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/chevrolet/logos/chevrolet.webp",
		},
		{
			name: "Citroen",
			image:
				"https://mda.spinny.com/sp-file-system/public/2024-09-16/aa761b62253847748114a897c54b23ae/raw/Citroen-logo-2009-2048x2048.png.png",
		},
		{
			name: "Datsun",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/datsun/logos/v1.webp",
		},
		{
			name: "Fiat",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/fiat/logos/fiat.webp",
		},
		{
			name: "Ford",
			image:
				"https://spn-sta.spinny.com/spinny-web/oth/raMicD2JTFa1JOLFZewdpg/raw/file.webp",
		},
		{
			name: "Honda",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/honda/logos/honda.webp",
		},
		{
			name: "Hyundai",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/hyundai/logos/hyundai.webp",
		},
		{
			name: "Jaguar",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/jaguar/logos/v1.webp",
		},
		{
			name: "Jeep",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/jeep/logos/v1.png",
		},
		{
			name: "KIA",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/kia/logos/v1.webp",
		},
		{
			name: "Land Rover",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/land-rover/logos/v1.png",
		},
		{
			name: "Mahindra",
			image:
				"https://spn-sta.spinny.com/spinny-web/oth/8GlhsoBSSg6L5A%2Bq6dAfiA/raw/file.webp",
		},
		{
			name: "Maruti Suzuki",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/maruti-suzuki/logos/maruti-suzuki.webp",
		},
		{
			name: "Mercedes",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/mercedes-benz/logos/v1.png",
		},
		{
			name: "MG",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/mg-motors/logos/v1.png",
		},
		{
			name: "MINI",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/mini/logos/v1.png",
		},
		{
			name: "Mitsubishi",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/mitsubishi/logos/v1.webp",
		},
		{
			name: "Nissan",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/nissan/logos/nissan.webp",
		},
		{
			name: "Renault",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/renault/logos/renault.webp",
		},
		{
			name: "Skoda",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/skoda/logos/skoda.webp",
		},
		{
			name: "Tata",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/tata/logos/tata.webp",
		},
		{
			name: "Tata EV",
			image:
				"https://mda.spinny.com/sp-file-system/public/2024-06-07/36f9ba4cc54946858cd038b45d290982/raw/tataev(1).png.png",
		},
		{
			name: "Toyota",
			image:
				"https://spn-sta.spinny.com/spinny-web/oth/T8mdDiRQRJeaJwhsjumEdA/raw/file.webp",
		},
		{
			name: "Volkswagen",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/volkswagen/logos/volkswagen.webp",
		},
		{
			name: "Volvo",
			image:
				"https://mda.spinny.com/spinny-web/media/cars/makes/volvo/logos/v1.png",
		},
	]);

	const handleSearchItem = (e) => {
		const value = e.target.value.trim();
		console.log(value);
		if (value == " ") {
			return setSearchValue(listOfBrands);
		}
		console.log("above is the value of handle search ");
		let udpatedArray = listOfBrands.filter((item) => {
			// return value.toLowerCase() === item.name.toLowerCase();
			return item.name.toLowerCase().includes(value);
		});
		console.log(udpatedArray);
		console.log("update array inside th eefxn");

		setSearchValue(udpatedArray);
	};
	console.log("below is an updated array");
	console.log(searchValue);

	const handleSelectBrand = (brand) => {
		console.log("below is the value of the brand");
		console.log(brand);
		// dispatch(updateInputValues({ brand }));
		dispatch(updateInputValues({ index: 0, value: brand }));
		setCurrentStep((value) => value + 1);
		dispatch(increaseCurrentSteps({ value: 2 }));
		dispatch(updateSubmissionValues({ name: "brand", value: brand }));
	};
	return (
		<div>
			<div className="relative my-3 mx-6 ">
				<h2 className="text-sm">
					Select the <b>brand</b> of you car
				</h2>
				<input
					type="text"
					className="w-full ring-1 ring-gray-300 p-2 rounded-lg my-3"
					placeholder="Search your brand"
					onChange={handleSearchItem}
				/>
				<FaSearch className="absolute top-10 right-3" size={25} color="gray" />
			</div>
			<div className="mx-6">
				<h2
					className={` uppercase font-stretch-50% text-xs ${poppins.className}`}
				>
					All Brands
				</h2>
				{/* {searchValue && searchValue.map((item) => <span>{item.name}</span>)} */}
				<div className="grid grid-cols-5 gap-2 overflow-y-scroll max-h-[15rem]">
					{searchValue.map((brand, index) => (
						<span
							key={index}
							className=" flex justify-center items-center bg-[#f6f6f6] min-h-25 hover:ring-2 ring-blue-700 mt-2 ml-2 cursor-pointer rounded-lg "
							onClick={() => handleSelectBrand(brand.name)}
						>
							<Image
								src={brand.image}
								width={80}
								height={80}
								alt="No Image Found"
							/>
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default BrandForm;

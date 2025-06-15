import {
	increaseCurrentSteps,
	updateInputValues,
	updateSubmissionValues,
} from "@/app/redux/slices/newUser";
import Image from "next/image";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";

const indianCities = [
	{ name: "Delhi" },
	{ name: "Bangalore" },
	{ name: "Mumbai" },
	{ name: "Pune" },
	{ name: "Hyderabad" },
	{ name: "Gurgaon" },
	{ name: "Noida" },
	{ name: "Ahmedabad" },
	{ name: "Chennai" },
	{ name: "Kolkata" },
	{ name: "Lucknow" },
	{ name: "Jaipur" },
	{ name: "Agra" },
	{ name: "Ahmednagar" },
	{ name: "Aligarh" },
	{ name: "Allahabad" },
	{ name: "Amravati" },
	{ name: "Anand" },
	{ name: "Asansol" },
	{ name: "Aurangabad" },
	{ name: "Ayodhya" },
	{ name: "Belgaum" },
	{ name: "Bharuch" },
	{ name: "Bhavnagar" },
	{ name: "Bhopal" },
	{ name: "Chandigarh" },
	{ name: "Coimbatore" },
	{ name: "Davanagere" },
	{ name: "Delhi NCR" },
	{ name: "Dharwad" },
	{ name: "Erode" },
	{ name: "Faridabad" },
	{ name: "Faridkot" },
	{ name: "Ghaziabad" },
	{ name: "Gorakhpur" },
	{ name: "Guntur" },
	{ name: "Hassan" },
	{ name: "Hisar" },
	{ name: "Hoshiarpur" },
	{ name: "Hubli" },
	{ name: "Indore" },
	{ name: "Jalandhar" },
	{ name: "Jamnagar" },
	{ name: "Jodhpur" },
	{ name: "Kanpur" },
	{ name: "Karnal" },
	{ name: "Kochi" },
	{ name: "Kolhapur" },
	{ name: "Kollam" },
	{ name: "Kota" },
	{ name: "Kottayam" },
	{ name: "Kozhikode" },
	{ name: "Ludhiana" },
	{ name: "Madurai" },
	{ name: "Mangalore" },
	{ name: "Mathura" },
	{ name: "Meerut" },
	{ name: "Mehsana" },
	{ name: "Mysore" },
	{ name: "Nagpur" },
	{ name: "Namakkal" },
	{ name: "Nashik" },
	{ name: "Palanpur" },
	{ name: "Panipat" },
	{ name: "Patiala" },
	{ name: "Rajkot" },
	{ name: "Rewari" },
	{ name: "Rohtak" },
	{ name: "Salem" },
	{ name: "Sangli" },
	{ name: "Satara" },
	{ name: "Shimoga" },
	{ name: "Siliguri" },
	{ name: "Solapur" },
	{ name: "Sonipat" },
	{ name: "Surat" },
	{ name: "Thrissur" },
	{ name: "Tiruppur" },
	{ name: "Trichy" },
	{ name: "Trivandrum" },
	{ name: "Tumkur" },
	{ name: "Udaipur" },
	{ name: "Udupi" },
	{ name: "Vadodara" },
	{ name: "Varanasi" },
	{ name: "Vellore" },
	{ name: "Vijayawada" },
	{ name: "Visakhapatnam" },
	{ name: "Warangal" },
];

const LocationForm = ({ setCurrentStep }) => {
	const [citiList, setCityList] = useState(indianCities);
	const dispatch = useDispatch();

	const handleSearchItem = (e) => {
		console.log(e.target.value);
		let value = e.target.value.trim();
		if (value == "") {
			return setCityList(indianCities);
		}
		let newArray = [];
		newArray = citiList.filter((item) => {
			return item.name.toLowerCase().includes(value);
		});
		console.log("below is the new Araay");
		console.log(newArray);

		setCityList(newArray);
	};
	const handleSelectCity = (value) => {
		console.log("below is the location");
		console.log(value);
		dispatch(updateInputValues({ index: 1, value: value }));
		dispatch(increaseCurrentSteps({ value: 3 }));
		dispatch(updateSubmissionValues({ name: "location", value: value }));
		setCurrentStep((value) => value + 1);
	};

	return (
		<div>
			<div className="relative my-3 mx-6 ">
				<h2 className="text-sm">
					Select the <b>RTO Location</b> of your car
				</h2>
				<input
					type="text"
					className="w-full ring-1 ring-gray-300 p-2 rounded-lg my-3"
					placeholder="Search your city"
					onChange={handleSearchItem}
				/>
				<FaSearch className="absolute top-10 right-3" size={25} color="gray" />
			</div>
			<h3 className=" text-xs underline my-3 ml-1">
				Choose the Cities from below list
			</h3>
			<div className="grid grid-cols-4 gap-2 overflow-y-scroll max-h-[15rem]">
				{citiList.map((item, index) => (
					<div
						key={index}
						className="bg-[#f1f1f1] p-3 rounded-lg flex justify-center cursor-pointer"
						onClick={() => handleSelectCity(item.name)}
					>
						<span className=" capitalize">{item.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default LocationForm;

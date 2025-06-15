'use client'
import Header from "@/components/HomeSections/Header";
import HomeSectionOne from "@/components/HomeSections/HomeSectionOne";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Provider store={store}>
				<Header />
				<HomeSectionOne />
			</Provider>
		</div>
	);
}

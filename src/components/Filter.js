import { useState } from "react";
export default function Filter(props) {
	const [region, setRegion] = useState("");
	function chooseRegion(value) {
		setRegion(value);
		props.selectedRegion(value);
	}
	function open() {
		const el = document.getElementById("option");
		el.classList.toggle("show-option");
	}
	return (
		<div
			onClick={() => {
				open();
			}}
			className="transition-colors duration-300 relative flex justify-between items-center  p-4 bg-white w-[230px] card-shadow dark:bg-darkmodeEl dark:text-darkmodeText"
		>
			<p className="first:first-letter:uppercase">
				{region.length > 0 ? region : "Filter by Region"}
			</p>
			<span>
				<svg
					className="h-[20px] w-[20px] "
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<title>Chevron Down</title>
					<path
						className="dark:stroke-white fill-transparent"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="48"
						d="M112 184l144 144 144-144"
					/>
				</svg>
			</span>
			<div
				id="option"
				className="dark:bg-darkmodeEl transition-colors duration-300 absolute hidden  card-shadow left-0 right-0 -bottom-[11.5rem] p-4 z-10 bg-white"
			>
				<p
					onClick={() => {
						chooseRegion("all");
					}}
				>
					All
				</p>
				<p
					onClick={() => {
						chooseRegion("africa");
					}}
				>
					Africa
				</p>
				<p
					onClick={() => {
						chooseRegion("america");
					}}
				>
					America
				</p>
				<p
					onClick={() => {
						chooseRegion("asia");
					}}
				>
					Asia
				</p>
				<p
					onClick={() => {
						chooseRegion("europe");
					}}
				>
					Europe
				</p>
				<p
					onClick={() => {
						chooseRegion("oceania");
					}}
				>
					Oceania
				</p>
			</div>
		</div>
	);
}

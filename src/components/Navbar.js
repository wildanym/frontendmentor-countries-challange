export default function Navbar(props) {
	function darkmode() {
		let theme = localStorage.getItem("theme");

		if (theme === "light" || theme === null) {
			props.changeMode("dark");
		} else {
			props.changeMode("light");
		}
	}
	return (
		<div className="z-50 flex justify-between w-full transition-colors duration-300 shadow-md p-7 w-fullfixed bg-lightmodeBg dark:bg-darkmodeEl dark:text-darkmodeText">
			<h1 className="text-sm font-bold font-nunito">Where in the world?</h1>
			<div
				onClick={() => {
					darkmode();
				}}
				className="flex items-center gap-3"
			>
				<svg
					className="h-[15px] w-[15px]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<title>Moon</title>
					<path
						className="dark:fill-white fill-transparent"
						d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="32"
					/>
				</svg>

				<p className="text-sm">Dark Mode</p>
			</div>
		</div>
	);
}

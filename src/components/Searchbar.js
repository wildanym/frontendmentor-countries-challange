import { useRef, useState } from "react";

export default function Searchbar(props) {
	const [keyword, setKeyword] = useState("");
	const ref = useRef(null);

	function handle(event) {
		event.preventDefault();
		props.search(keyword);
	}

	return (
		<div className="flex items-center w-full md:w-[500px] gap-2 p-2 pl-6 card-shadow dark:bg-darkmodeEl">
			<svg
				onClick={props.search.bind(this, keyword)}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				className="w-[24px] h-[24px] hover:cursor-pointer"
			>
				<title>Search</title>
				<path
					className="dark:stroke-darkmodeText stroke-lightmodeInput"
					d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
					fill="none"
					stroke="currentColor"
					strokeMiterlimit="10"
					strokeWidth="32"
				/>
				<path
					className="dark:stroke-darkmodeText stroke-lightmodeInput"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeMiterlimit="10"
					strokeWidth="32"
					d="M338.29 338.29L448 448"
				/>
			</svg>
			<form
				onSubmit={(event) => {
					handle(event);
				}}
				className="w-full pr-3"
			>
				<input
					value={keyword}
					ref={ref}
					onChange={(event) => {
						setKeyword(event.target.value);
					}}
					type="text"
					className="w-full p-3 ml-3 rounded-md placeholder-lightmodeInput dark:placeholder-white dark:bg-darkmodeEl dark:text-darkmodeText focus:outline-none"
					placeholder="Search for a country..."
				/>
			</form>
		</div>
	);
}

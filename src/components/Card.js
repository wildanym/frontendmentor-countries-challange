export default function Card(props) {
	return (
		<div className="overflow-hidden card-shadow w-[300px] h-[400px] dark:text-darkmodeText dark:bg-darkmodeEl">
			<div className=" w-[310px] h-[190px] border dark:border-none border-b-slate-200 overflow-hidden">
				<img
					src={props.flag}
					alt="flag"
					className="relative -left-1 object-fill w-[310px] h-[195px]"
				/>
			</div>
			<div className="flex flex-col items-start gap-1 pb-12 p-7 max-w-[320px]">
				<h2 className="my-4 text-xl font-bold">{props.name}</h2>
				<p>
					<span className="font-semibold font-nunito">Population</span> :{" "}
					{props.population}
				</p>
				<p>
					<span className="font-semibold font-nunito">Region</span> :{" "}
					{props.region}
				</p>
				<p>
					<span className="font-semibold font-nunito">Capital</span> :{" "}
					{props.capital}
				</p>
			</div>
		</div>
	);
}

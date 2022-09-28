import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Skeleton from "../components/Skeleton";

export default function Detail() {
	const { slug } = useParams();
	const [detail, setDetail] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [params, setParams] = useState(slug);

	useEffect(() => {
		setParams(slug);
	}, [slug]);

	useEffect(() => {
		fetchDetail(params);
	}, [params]);

	function fetchDetail(value) {
		setIsLoading(true);
		axios
			.get(`https://restcountries.com/v3.1/alpha/${value}`)
			.then((Response) => {
				const data = Response.data[0];
				setDetail(data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const icon = (
		<svg
			className="w-[17px] h-[17px]"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<title>Arrow Back</title>
			<path
				className="dark:stroke-darkmodeText"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="48"
				d="M244 400L100 256l144-144M120 256h292"
			/>
		</svg>
	);

	function formatNumber(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	}

	function getLanguages(obj) {
		let arr = [];
		Object.keys(obj).forEach(function (key) {
			arr.push(obj[key]);
		});
		let text = arr.toString();
		return text.replace(",", ", ");
	}

	function getCurrecies(obj) {
		let arr = [];
		Object.keys(obj).forEach(function (key) {
			arr.push(obj[key].name);
		});
		let text = arr.toString();
		return text.replace(",", ", ");
	}

	return (
		<div className="flex flex-col w-full gap-12 font-nunito content-wrapper">
			{isLoading ? (
				<>
					<div className="md:hidden">
						<Skeleton />
					</div>
					<div className="hidden w-full md:flex md:justify-center md:p-28">
						<p className="text-2xl font-bold animate-pulse">Loading</p>
					</div>
				</>
			) : (
				<>
					<Link to={"/"}>
						<Button title="Back" icon={icon} styling="w-[100px] h-[30px]" />
					</Link>
					<div className="flex flex-col w-full gap-7 md:gap-28 md:flex-row md:relative">
						<div className="md:min-w-[600px] md:min-h-[370px] overflow-hidden flex justify-start md:border md:border-b-slate-200 dark:border-none">
							<img
								src={detail.flags.png}
								alt="flags"
								className="object-fill w-full h-full"
							/>
						</div>

						<div className="flex flex-col w-full gap-12 md:flex-row md:relative md:justify-between">
							<section className="flex flex-col gap-3">
								<h2 className="mb-5 text-xl font-bold">{detail.name.common}</h2>
								<p className="text-sm">
									<span className="font-semibold ">Native Name</span> :{" "}
									{detail.name.official}
								</p>
								<p className="text-sm">
									<span className="font-semibold ">Population</span> :{" "}
									{formatNumber(detail.population)}
								</p>
								<p className="text-sm">
									<span className="font-semibold ">Region</span> :{" "}
									{detail.region}
								</p>
								<p className="text-sm">
									<span className="font-semibold ">Sub Region</span> :{" "}
									{detail.subregion}
								</p>
								<p className="text-sm">
									<span className="font-semibold ">Capital</span> :{" "}
									{detail.capital}
								</p>
							</section>

							<section className="flex flex-col gap-3">
								<p className="text-sm">
									<span className="font-semibold ">Top Level Domain</span> :{" "}
									{detail.tld}
								</p>
								<p className="text-sm">
									<span className="font-semibold ">Currencies</span> :{" "}
									{getCurrecies(detail.currencies)}
								</p>
								<p className="text-sm">
									<span className="font-semibold ">Languages</span> :{" "}
									{getLanguages(detail.languages)}
								</p>
							</section>
							{detail.borders && (
								<section className="bottom-0 left-0 md:absolute">
									<h2 className="font-bold">Border Countries :</h2>
									<div className="flex flex-wrap gap-3 mt-3">
										{detail.borders.map((item) => {
											return (
												<Link key={item} to={`/detail/${item}`}>
													<Button title={item} styling="w-[100px] h-[30px]" />
												</Link>
											);
										})}
									</div>
								</section>
							)}
						</div>
					</div>
				</>
			)}
		</div>
	);
}

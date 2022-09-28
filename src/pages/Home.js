import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Searchbar from "../components/Searchbar";
import Skeleton from "../components/Skeleton";
import { Link } from "react-router-dom";

export default function Home() {
	const [datas, setDatas] = useState([]);
	const [region, setRegion] = useState("");
	const [loading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	// fetch all data
	useEffect(() => {
		getData();
	}, []);
	function getData() {
		setLoading(true);
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((Response) => {
				setDatas(Response.data);
				setLoading(false);
				setIsError(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// filter
	useEffect(() => {
		if (region === "all") {
			getData();
			return;
		}
		if (region.length > 0) {
			setLoading(true);
			axios
				.get(`https://restcountries.com/v3.1/region/${region}`)
				.then((Response) => {
					setDatas(Response.data);
					setLoading(false);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [region]);

	// Searching data
	function search(value) {
		setLoading(true);
		if (value.length === 0) {
			getData();
			return;
		}
		axios
			.get(`https://restcountries.com/v3.1/name/${value}`)
			.then((Response) => {
				setDatas(Response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
				setIsError(true);
			});
	}

	function formatNumber(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	}
	function selectedRegion(value) {
		setRegion(value);
	}

	return (
		<>
			<div className="flex flex-col items-center gap-6 md:gap-12 content-wrapper">
				<div className="flex flex-col w-full gap-6 md:mt-4 md:flex-row md:justify-between">
					<Searchbar search={search} />
					<Filter selectedRegion={selectedRegion} />
				</div>

				{loading ? (
					<div className="flex flex-col items-center gap-12 w-fit md:flex-row md:flex-wrap md:items-start md:justify-between">
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
					</div>
				) : isError ? (
					<div className="p-8">Data not found</div>
				) : (
					<div className="flex flex-col items-center gap-12 w-fit md:flex-row md:flex-wrap md:items-start md:justify-center lg:justify-center">
						{datas.map((data) => {
							return (
								<Link
									key={data.area + data.altSpellings}
									to={`/detail/${data.cca2}`}
								>
									<Card
										flag={data.flags.png}
										name={data.name.common}
										population={formatNumber(data.population)}
										region={data.region}
										capital={data.capital}
									/>
								</Link>
							);
						})}
					</div>
				)}
			</div>
		</>
	);
}

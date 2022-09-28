export default function Skeleton(props) {
	return (
		<div className="flex flex-wrap justify-center">
			<div className="w-[300px] p-2 ">
				<a
					href="/detail/72112620-skoda-octavia-combi-iii-combi-style-green-tec"
					className="relative flex flex-col w-full overflow-hidden bg-white rounded dark:bg-darkmodeEl card translate-3d-none-after card-shadow"
				>
					<div className="relative group text-primary-500 pt-[70%]">
						<div className="absolute top-0 left-0 w-full h-[200px]">
							<span
								className={`skeleton-box bg-slate-200 dark:opacity-30 dark:bg-slate-300 transition-transform transform-center block h-full`}
							></span>
						</div>
					</div>
					<div className="flex flex-col flex-grow">
						<div className="relative flex-grow pt-4 pl-4 pr-4 mb-4 text-left">
							<h3 className="mr-10 text-lg font-bold text-gray-darkest">
								<span className="inline-block w-1/6 h-5 skeleton-box dark:bg-slate-300 bg-slate-200 dark:opacity-30 "></span>
								<span className="inline-block w-1/2 h-5 skeleton-box dark:bg-slate-300 bg-slate-200 dark:opacity-30 "></span>
								<span className="inline-block w-2/4 h-5 skeleton-box dark:bg-slate-300 bg-slate-200 dark:opacity-30 "></span>
								<span className="inline-block w-2/5 h-5 skeleton-box dark:bg-slate-300 bg-slate-200 dark:opacity-30 "></span>
							</h3>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
}

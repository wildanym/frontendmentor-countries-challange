export default function Button(props) {
	return (
		<div
			className={`text-black dark:text-darkmodeText dark:bg-darkmodeEl gap-3 justify-center items-center flex card-shadow ${props.styling}`}
		>
			{props.title && props.icon}
			<div>{props.title}</div>
		</div>
	);
}

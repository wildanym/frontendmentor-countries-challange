/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	mode: "jit",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				nunito: ["Nunito Sans", "sans-serif"],
			},
			colors: {
				darkmodeBg: "hsl(207, 26%, 17%)",
				lightmodeBg: "hsl(0, 0%, 98%)",
				lightmodeText: "hsl(200, 15%, 8%)",
				darkmodeText: "hsl(0, 0%, 100%)",
				darkmodeEl: "hsl(209, 23%, 22%)",
				lightmodeInput: "hsl(0, 0%, 52%)",
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
// const { colors } = require("tailwindcss/colors");

// console.log("cores", colors);

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				brand: {
					50: "#f3f3f3",
					100: "#e7e7e7",
					200: "#c4c4c4",
					300: "#a0a0a0",
					400: "#585858",
					500: "#111111",
					600: "#0f0f0f",
					700: "#0d0d0d",
					800: "#0a0a0a",
					900: "#080808",
					DEFAULT: "#111111",
				},
			},
		},
	},
	plugins: [],
};

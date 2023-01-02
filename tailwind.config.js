/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./common/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				mainColor: "#F3A83C"
			}
		},
		container: {
			center: true,
			padding: "16px"
		},
	},
	plugins: [
		require('tailwindcss-debug-screens')
	],
};

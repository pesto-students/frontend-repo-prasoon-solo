/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
		extend: {
			colors: {
				"dark-layer-1": "rgb(40,40,40)",
				"dark-layer-2": "rgb(26,26,26)",
				"dark-layer-3":"rgb(55,55,55)",
				"dark-layer-4": "rgb(62,61,61)",
				"dark-label-2": "rgba(239, 241, 246, 0.75)",
			},
		},
	},
  plugins: [],
}


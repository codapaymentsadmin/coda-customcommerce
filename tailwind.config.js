module.exports = {
	content: [
		"./templates/**/*.hbs", // Include all Handlebars files
		"./assets/scripts/**/*.js", // Include JavaScript files
		"./assets/styles/**/*.css", // Include CSS files
	],
	theme: {
		extend: {
			colors: {
				"color-brand": "var(--color-brand)",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light"],
	},
};

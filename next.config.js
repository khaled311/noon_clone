/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
const nextConfig = {
	...nextTranslate(),
	env: {
		BASEURL: "http://localhost:1337/api/",
		IMGURL: "http://localhost:1337",
		APITOKEN: 'b449f0724d5bb48a09ac6844fc65f4345c99b9f0b9c810200ca7d6182114c98bb4c3129634d0cbaf6c71d2bf2e322eab49a98b8830e6297588e37ade334cbe8a9e85a12a06c1a3acae0ab65a9182a28027df82f7350abd0f4bd138da3e60ff215e8f159a106bfdda0f815613a7759d73a247e70332c7b851c0c5631341c6d3ef'
	},
	images: {
		domains: ["icons8.com", "localhost"],
		formats: ["image/avif", "image/webp"],
	}
};

module.exports = nextConfig;

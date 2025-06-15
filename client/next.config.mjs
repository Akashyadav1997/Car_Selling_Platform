/** @type {import('next').NextConfig} */
const nextConfig = {
	env:{
		NEXT_PUBLIC_SERVER_URL: "http://localhost:7070"
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "spn-sta.spinny.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "mda.spinny.com",
				pathname: "/**",
			}
		],
	},
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
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

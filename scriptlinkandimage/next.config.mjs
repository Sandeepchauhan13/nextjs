/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.w3docs.com',
                port: '',
               

            },
        ],
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */

// next.config.js
module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:9000/api/:path*', // Laravel 백엔드 URL
            },
        ];
    },
};
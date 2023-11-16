/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'i.imgur.com',
            },
          ],
    },
    exclude: ["optional"]
}

module.exports = nextConfig

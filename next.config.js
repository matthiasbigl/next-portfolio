/** @type {import('next').NextConfig} */
module.exports = {
  images:{
    domains: ["media.graphassets.com", "sfkp.ch", "s.gravatar.com"],
    paths: ["/assets/images/:path*"],
    dangerouslyAllowSVG: true
  },
  reactStrictMode: true,
}

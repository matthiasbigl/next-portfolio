/** @type {import('next').NextConfig} */
module.exports = {
  images:{
    domains: ["media.graphassets.com", "sfkp.ch", "s.gravatar.com"],
    paths: ["/assets/images/:path*"],
    dangerouslyAllowSVG: true
  },
  reactStrictMode: true,
  env:{
    SERVICE_ID_EMAILJS: process.env.SERVICE_ID_EMAILJS,
    USER_ID_EMAILJS: process.env.USER_ID_EMAILJS,
    TEMPLATE_ID_EMAILJS: process.env.TEMPLATE_ID_EMAILJS,

  }
}

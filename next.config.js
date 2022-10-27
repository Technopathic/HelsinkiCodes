const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/
});

const env = {
    "APP_LOCALE": "en",
    "APP_APPLE_TOUCH_ICON": "/favicon128.png",
    "APP_FAVICON_16x16": "/favicon32.png",
    "APP_FAVICON_32x32": "/favicon16.png",

    "APP_TITLE": "Helsinki Codes",
    "APP_DESCRIPTION": "Helsinki Codes is a news and events platform for developers, designers, and enthusiasts located in Finland. Run by NowNano.",
    "APP_TYPE": "website",
    "APP_URL": "https://helsinki.codes",
    "APP_DOMAIN": "helsinki.codes",
    "APP_IMAGE": "https://helsinki.codes/og-image.png",
    "APP_IMAGE_TYPE": "image/png",
    "APP_IMAGE_WIDTH": "1200",
    "APP_IMAGE_HEIGHT": "630",
    "APP_SITE_NAME": "Helsinki Codes",
    "APP_LOCALE": "en",

    "POST_COUNT": 10,
    "NOWNANO_URL": "https://nownano.tv",
    "SUPPORT_EMAIL": "nownanotv@gmail.com",

    "INSTAGRAM": "",
    "TWITTER": "https://twitter.com/NowNanoTV",
    "GITHUB": "https://github.com/Technopathic",
    "TWITCH": "https://twitch.tv/NowNano",
    "DISCORD": "https://discord.gg/t6fgmdAh",
    "KO_FI": "",
    "LINKEDIN": "https://www.linkedin.com/in/nsoharab/",
    "YOUTUBE": "https://www.youtube.com/channel/UCo43V_OXbehy7r2rUb5ZPsQ",

    "SUPABASE_URL": "",
    "SUPABASE_KEY": "",
    "SUPABASE_PUBLIC_KEY": ""
}

module.exports = withMDX({
    env,
    swcMinify: true,
    pageExtensions: ["js", "jsx", "md", "mdx"]
})
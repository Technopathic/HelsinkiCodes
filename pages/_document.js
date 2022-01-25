import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    render() {
        return (
            <Html lang={process.env.APP_LOCALE}>
                <Head>
                    <meta name="og:title" property="og:title" content={process.env.APP_TITLE} />
                    <meta name="og:site_name" property="og:site_name" content={process.env.APP_SITE_NAME} />
                    <meta name="og:locale" property="og:locale" content={process.env.APP_LOCALE} />
                    <meta name="og:type" property="og:type" content={process.env.APP_TYPE} />
                    <meta name="og:description" property="og:description" content={process.env.APP_DESCRIPTION} />
                    <meta name="og:url" property="og:url" content={process.env.APP_URL} />

                    <meta name="og:image:type" property="og:image:type" content={process.env.APP_IMAGE_TYPE} />
                    <meta name="og:image:width" property="og:image:width" content={process.env.APP_IMAGE_WIDTH} />
                    <meta name="og:image:height" property="og:image:height" content={process.env.APP_IMAGE_HEIGHT} />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta property="twitter:domain" content={process.env.APP_DOMAIN} />
                    <meta property="twitter:url" content={process.env.APP_URL} />

                    <link rel="apple-touch-icon" sizes="180x180" href={process.env.APP_APPLE_TOUCH_ICON} />
                    <link rel="icon" type="image/png" sizes="16x16" href={process.env.APP_FAVICON_16x16} />
                    <link rel="icon" type="image/png" sizes="32x32" href={process.env.APP_FAVICON_32x32} />

                    <link rel="preload" href="/fonts/Inter-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
                    <link rel="preload" href="/fonts/Inter-Bold.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
                </Head>
                <body className="bg-lightBrandOne">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
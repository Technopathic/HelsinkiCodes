import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    render() {
        return (
            <Html lang={process.env.APP_LOCALE}>
                <Head>
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
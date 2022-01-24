import Head from 'next/head'
export default ({title, description, image}) => (
	<Head>
		<meta charSet="utf-8" />
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <title>{title || process.env.APP_TITLE}</title>

        <meta name="description" content={description || process.env.APP_DESCRIPTION} />

        <meta name="og:title" property="og:title" content={title || process.env.APP_TITLE} />
        <meta name="og:site_name" property="og:site_name" content={process.env.APP_SITE_NAME} />
        <meta name="og:locale" property="og:locale" content={process.env.APP_LOCALE} />
        <meta name="og:type" property="og:type" content={process.env.APP_TYPE} />
        <meta name="og:description" property="og:description" content={process.env.APP_DESCRIPTION} />
        <meta name="og:url" property="og:url" content={process.env.APP_URL} />

        <meta name="og:image" property="og:image" content={image || process.env.APP_IMAGE} />
        <meta name="og:image:secure_url" property="og:image:secure_url" content={image || process.env.APP_IMAGE} />
        <meta name="og:image:type" property="og:image:type" content={process.env.APP_IMAGE_TYPE} />
        <meta name="og:image:width" property="og:image:width" content={process.env.APP_IMAGE_WIDTH} />
        <meta name="og:image:height" property="og:image:height" content={process.env.APP_IMAGE_HEIGHT} />

        <link rel="apple-touch-icon" sizes="180x180" href={process.env.APP_APPLE_TOUCH_ICON} />
        <link rel="icon" type="image/png" sizes="16x16" href={process.env.APP_FAVICON_16x16} />
        <link rel="icon" type="image/png" sizes="32x32" href={process.env.APP_FAVICON_32x32} />

        <link rel="preload" href="/fonts/Inter-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/Inter-Bold.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
	</Head>
);
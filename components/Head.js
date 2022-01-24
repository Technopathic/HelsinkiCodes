import Head from 'next/head'
export default ({ title, description, keywords, url = "", language }) => (
	<Head>
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		<meta name="theme-color" content="#118b92" />
		<link rel="manifest" href="/static/manifest/manifest.json" />

		<title>{title}</title>
		<meta name="description" content={description} />
		<meta name="keywords" content={keywords} />
		<meta name="author" content="..." />

		<meta property="og:site_name" content="..." />
		<meta property="og:title" content={title} />
		<meta property="og:url" content={`...${language}/${url}`} />
		<meta property="og:image" content={...} />
		<meta property="og:description" content={description} />
		<meta property="og:type" content="website" />

		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:image" content={...} />
		<meta name="twitter:card" content="summary_large_image" />

		<link rel="alternate" href={`...${url}`} hrefLang="nl" />
		<link rel="alternate" href={`...${url}`} hrefLang="en" />
		<link rel="alternate" href={`...${url}`} hrefLang="fr" />

		<link rel="icon" type="image/png" href={...} sizes="16x16" />
		<link rel="icon" type="image/png" href={...} sizes="32x32" />
		<link rel="apple-touch-icon" href={...} />
		<link rel="apple-touch-icon" sizes="180x180" href={...)} />
		<link rel="mask-icon" href={...)} color="#d04819"/>
		<link rel="shortcut icon" href={...} />
		<meta name="theme-color" content="#118b92" />
	</Head>
);
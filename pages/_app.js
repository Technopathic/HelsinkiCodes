import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import '../globals.css'
import "../prism-synthwave84.css";

import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieConsent from '../components/CookieConsent'

//Color One: #fef7ff
//Color Two: #eef7ff

const App = (props) => {
  const [cookieConsent, setCookieConsent] = useState(false);

  const router = useRouter()
  const excludeHeader = ['/CV', '/intro', '/outro']
  const excludeFooter = ['/CV', '/intro', '/outro']

  useEffect(() => {
    setCookieConsent(localStorage.getItem('cookieConsent'))
  }, [])

  const acceptCookie = () => {
    localStorage.setItem('cookieConsent', true);
    setCookieConsent(true);
  }

  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        
        <meta name="og:title" property="og:title" content={process.env.APP_TITLE} />
        <meta name="og:site_name" property="og:site_name" content={process.env.APP_SITE_NAME} />
        <meta name="og:locale" property="og:locale" content={process.env.APP_LOCALE} />
        <meta name="og:type" property="og:type" content={process.env.APP_TYPE} />
        <meta name="og:description" property="og:description" content={process.env.APP_DESCRIPTION} />
        <meta name="og:url" property="og:url" content={process.env.APP_URL} />

        <meta name="og:image:type" property="og:image:type" content={process.env.APP_IMAGE_TYPE} />
        <meta name="og:image:width" property="og:image:width" content={process.env.APP_IMAGE_WIDTH} />
        <meta name="og:image:height" property="og:image:height" content={process.env.APP_IMAGE_HEIGHT} />
        <meta name="og:image" property="og:image" content={process.env.APP_IMAGE} />
        <meta name="og:image:secure_url" property="og:image:secure_url" content={process.env.APP_IMAGE} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={process.env.APP_DOMAIN} />
        <meta property="twitter:url" content={process.env.APP_URL} />
        <meta name="twitter:title" content={process.env.APP_SITE_NAME} />
        <meta name="twitter:description" content={process.env.APP_DESCRIPTION} />
        <meta name="twitter:image" content={process.env.APP_IMAGE} />

        <title>{process.env.APP_TITLE}</title>
        <meta name="description" content={process.env.APP_DESCRIPTION} />

        <link rel="apple-touch-icon" sizes="180x180" href={process.env.APP_APPLE_TOUCH_ICON} />
        <link rel="icon" type="image/png" sizes="16x16" href={process.env.APP_FAVICON_16x16} />
        <link rel="icon" type="image/png" sizes="32x32" href={process.env.APP_FAVICON_32x32} />
        {/*
        <link rel="preload" href="/fonts/Inter-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/Inter-Bold.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=League+Gothic&display=swap" as="style" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=League+Gothic&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex flex-col justify-between min-h-screen text-gray-700">
        {/*!excludeHeader.includes(router.pathname) && <Header />*/}
        <Component {...pageProps} />
        {/*!excludeFooter.includes(router.pathname) && <Footer />*/}
        {/*!cookieConsent && <CookieConsent acceptCookie={acceptCookie} />*/}
      </div>
    </>
  )
}

export default App
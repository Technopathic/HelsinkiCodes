import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import { useRouter } from 'next/router'

import '../globals.css'
import "../prism-synthwave84.css";

import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieConsent from '../components/CookieConsent'

const App = (props) => {
  const [cookieConsent, setCookieConsent] = useState(false);

  const router = useRouter()
  const excludeHeader = []
  const excludeFooter = []

  usePanelbear('11R02Y1R6RX');

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

        <meta name="og:image" property="og:image" content={process.env.APP_IMAGE} />
        <meta name="og:image:secure_url" property="og:image:secure_url" content={process.env.APP_IMAGE} />
        <meta name="og:description" property="og:description" content={process.env.APP_DESCRIPTION} />
        <meta name="og:url" property="og:url" content={process.env.APP_URL} />

        <meta name="twitter:title" content={process.env.APP_SITE_NAME} />
        <meta name="twitter:description" content={process.env.APP_DESCRIPTION} />
        <meta name="twitter:image" content={process.env.APP_IMAGE} />
        <meta property="twitter:url" content={process.env.APP_URL} />

        <title>{process.env.APP_TITLE}</title>
        <meta name="description" content={process.env.APP_DESCRIPTION} />
      </Head>
      <div className="flex flex-col justify-between min-h-screen text-gray-700">
        {!excludeHeader.includes(router.pathname) && <Header />}
        <Component {...pageProps} />
        {!excludeFooter.includes(router.pathname) && <Footer />}
        {/*!cookieConsent && <CookieConsent acceptCookie={acceptCookie} />*/}
      </div>
    </>
  )
}

export default App
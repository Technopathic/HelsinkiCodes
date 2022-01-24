import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import configureStore from '../store'

import '../globals.css'
import "../prism-synthwave84.css";

import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieConsent from '../components/CookieConsent'

const store = configureStore()
const persistor = persistStore(store)

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
        <title>{process.env.APP_TITLE}</title>
        <meta charSet="utf-8" />
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content={process.env.APP_DESCRIPTION} />

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
        
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="flex flex-col justify-between min-h-screen text-gray-700">
            {!excludeFooter.includes(router.pathname) && <Header />}
            <Component {...pageProps} />
            {!excludeFooter.includes(router.pathname) && <Footer />}
            {/*!cookieConsent && <CookieConsent acceptCookie={acceptCookie} />*/}
          </div>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
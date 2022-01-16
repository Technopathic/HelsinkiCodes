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
  const [theme, setTheme] = useState('light')
  const [cookieConsent, setCookieConsent] = useState(false);

  const router = useRouter()
  const excludeHeader = ['/CV', '/intro-mobile', '/Test']
  const excludeFooter = ['/CV', '/intro-mobile', '/Test']

  usePanelbear('ENQ1HaV0pgl');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
      document.body.classList.add("bg-bodyDark")
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
      document.body.classList.remove("bg-bodyDark")
    }

    setCookieConsent(localStorage.getItem('cookieConsent'))
  }, [])

  const handleTheme = (item) => {
    localStorage.theme = item
    setTheme(item)
    if (item === 'dark') {
      document.documentElement.classList.add('dark')
      document.body.classList.add("bg-bodyDark")
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove("bg-bodyDark")
    }
  }

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

        <title>{process.env.APP_TITLE}</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="flex flex-col justify-between min-h-screen text-gray-700 dark:text-gray-50">
            <Header theme={theme} handleTheme={handleTheme} />
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
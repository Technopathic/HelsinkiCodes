import React, { useEffect, useState } from 'react'
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
  )
}

export default App
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Nav from "./Nav"

function MyApp({ Component, pageProps }) {
  return<>
  <Nav />
   <Component {...pageProps} />
   </>
}

export default MyApp

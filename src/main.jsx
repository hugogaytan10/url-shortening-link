import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav'
import { MainInformation } from './components/MainInformation'
import './index.css'
import { ProductDetails } from './components/ProductDetails'
import { Boost } from './components/Boost'
import { Footer } from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <main>
      <MainInformation/>
      <section>
        <ProductDetails/>
        <Boost/>
      </section>
    </main>
    <footer>
      <Footer/>
    </footer>
  </React.StrictMode>
)

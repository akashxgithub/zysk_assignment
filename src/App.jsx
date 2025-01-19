import React from 'react'
import Navbar from './components/Navbar'
import Analytics from './components/Analytics'
import Features from './components/Features'
import Faqs from './components/Faqs'
import Blog from './components/Blog'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Analytics/>
      <Features/>
      <Faqs/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App

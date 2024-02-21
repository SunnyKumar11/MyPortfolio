import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/component/Navbar'
import Header from './assets/component/Header'
import About from './assets/component/About'
import Cards from './assets/component/Cards'
import Footers from './assets/component/Footers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Cards />
      <Footers />
    </>
  )
}

export default App

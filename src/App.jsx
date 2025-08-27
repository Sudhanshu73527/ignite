import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Course from './Component/Course/Course'
import Keyoffering from './Component/Keyoffering/Keyoffering'
import Highligts from './Component/Highligts/Highligts'
import RegisterSteps from './Component/RegisterSteps/RegisterSteps'
import Footer from './Component/Footer/Footer'
import Frequently from './Component/Frequently/Frequently'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Course/>
      <Keyoffering/>
      {/* <RegisterSteps/> */}
      <Highligts/>
      <Frequently/>
      <Footer/>
    </div>
  )
}

export default App

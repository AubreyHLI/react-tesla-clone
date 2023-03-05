import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeaderBlock from '../components/HeaderBlock'
import model3 from '../images/modelof3.JPG'
import modely from '../images/model-y.jpg'
import models from '../images/model-s.jpg'
import modelx from '../images/model-x.jpg'
import solarpanels from '../images/solarpanels.jpg'
import accessories from '../images/accessories.jpg'

const Home = ({isMenuOpen, setIsMenuOpen}) => {
  return (
    <>
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isSticky={true}/> 

      {/* HeaderBlocks */}
      <HeaderBlock imgurl={model3} title={'Model 3'} />
      <HeaderBlock imgurl={modely} title={'Model Y'} />
      <HeaderBlock imgurl={models} title={'Model S'} />
      <HeaderBlock imgurl={modelx} title={'Model X'} />
      <HeaderBlock imgurl={solarpanels} title={'Solar and Powerwall'} />
      <HeaderBlock imgurl={accessories} title={'Accessories'} />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home
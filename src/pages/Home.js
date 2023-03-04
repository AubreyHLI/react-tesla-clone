import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeaderBlock from '../components/HeaderBlock'

const Home = ({isMenuOpen, setIsMenuOpen}) => {
  return (
    <>
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isSticky={true}/> 

      {/* HeaderBlocks */}
      <HeaderBlock imgurl={'./react-tesla-clone/images/modelof3.JPG'} title={'Model 3'} />
      <HeaderBlock imgurl={'./react-tesla-clone/images/model-y.jpg'} title={'Model Y'} />
      <HeaderBlock imgurl={'./react-tesla-clone/images/model-s.jpg'} title={'Model S'} />
      <HeaderBlock imgurl={'./react-tesla-clone/images/model-x.jpg'} title={'Model X'} />
      <HeaderBlock imgurl={'./react-tesla-clone/images/solarpanels.jpg'} title={'Solar and Powerwall'} />
      <HeaderBlock imgurl={'./react-tesla-clone/images/accessories.jpg'} title={'Accessories'} />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home
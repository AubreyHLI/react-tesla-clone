import React from 'react'
import Header from '../components/Header'
import HeaderBlock from '../components/HeaderBlock'

const Home = ({isMenuOpen, setIsMenuOpen}) => {
  return (
    <>
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isSticky={true}/> 

      {/* HeaderBlocks */}
      <HeaderBlock imgurl={'/images/model-3.jpg'} title={'Model 3'} />
      <HeaderBlock imgurl={'/images/model-y.jpg'} title={'Model Y'} />
      <HeaderBlock imgurl={'/images/model-s.jpg'} title={'Model S'} />
      <HeaderBlock imgurl={'/images/model-x.jpg'} title={'Model X'} />
      <HeaderBlock imgurl={'/images/solarpanels.jpg'} title={'Solar and Powerwall'} />
      <HeaderBlock imgurl={'/images/accessories.jpg'} title={'Accessories'} />
    </>
  )
}

export default Home
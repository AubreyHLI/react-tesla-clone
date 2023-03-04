import React from 'react';
import styles from '../styles/TeslaAccount.module.css';
import Header from '../components/Header';

const TeslaAccount = ({isMenuOpen, setIsMenuOpen}) => {
  return(
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isSticky={false}/> 
      TeslaAccount
    </div>
  )
}

export default TeslaAccount
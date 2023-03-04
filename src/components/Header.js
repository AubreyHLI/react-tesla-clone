import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';

const Header = ({isMenuOpen, setIsMenuOpen, isSticky}) => {

  return (
    <div className={`${styles.header} ${!isSticky && styles.header_white}`}>
        <div>
            <Link to='/'><img alt='' src='./react-tesla-clone/images/tesla-logo.png' className='logoImg' /></Link>
        </div>
        <div className={`${styles.links} ${styles.middle}`}>
            <Link to='/'><span>Model S</span></Link>
            <Link to='/'><span>Model 3</span></Link>
            <Link to='/'><span>Model X</span></Link>
            <Link to='/'><span>Model Y</span></Link>
            <Link to='/'><span>Model S</span></Link>
            <Link to='/'><span>Cybertruck</span></Link>
            <Link to='/'><span>Powerwall</span></Link>
        </div>
        <div className={styles.links}>
            <Link to='/' className={styles.right} >Shop</Link>
            <Link to='/teslaaccount' className={styles.right}>Tesla Account</Link>
            <div onClick={() => setIsMenuOpen(true)} className={styles.menuIcon}>
                <MenuIcon />
            </div>
        </div>
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </div>
  )
}

export default Header
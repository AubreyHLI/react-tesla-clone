import React from 'react';
import styles from '../styles/Menu.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Menu = ({isMenuOpen, setIsMenuOpen}) => {

  return (
    <>
        <div className={`${styles.backdrop} ${!isMenuOpen && styles.hidden}`}>
        </div>
        <div className={`${styles.menu} ${!isMenuOpen && styles.hidden}`}>
            <div className={styles.closeIcon}>
                <span onClick={() => setIsMenuOpen(false)}>
                    <CloseIcon />
                </span>
            </div>
            <div className={styles.navbar} onClick={() => setIsMenuOpen(false)}>
                <Link to='/' className={styles.hiddenM}>Model S</Link>
                <Link to='/' className={styles.hiddenM}>Model 3</Link>
                <Link to='/' className={styles.hiddenM}>Model X</Link>
                <Link to='/' className={styles.hiddenM}>Model Y</Link>
                <Link to='/' className={styles.hiddenM}>Model S</Link>
                <Link to='/' className={styles.hiddenM}>Cybertruck</Link>
                <Link to='/' className={styles.hiddenM}>Powerwall</Link>
                <Link to="/">Existing Inventory</Link>
                <Link to="/">Used Inventory</Link>
                <Link to="/">Trade-In</Link>
                <Link to="/">Roadster</Link>
                <Link to="/">Commercial Energy</Link>
                <Link to="/">Utilities</Link>
                <Link to="/">Energy</Link>
                <Link to="/">Charging</Link>
                <Link to="/">Find Us</Link>
                <Link to="/">Events</Link>
                <Link to="/">Support</Link>
                <Link to="/">Investor Relations</Link>
                <Link to='/' className={styles.hiddenM}>Shop</Link>
                <Link to='/teslaaccount' className={styles.hiddenM}>Tesla Account</Link>
            </div>
        </div>
    </>
  )
}

export default Menu
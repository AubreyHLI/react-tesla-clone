import React from 'react';
import styles from '../styles/TeslaAccount.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { auth } from '../firebase';
import modelofs from '../images/models.jpg'
import modelofx from '../images/modelx.jpg'


const TeslaAccount = ({isMenuOpen, setIsMenuOpen}) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
    .then(() => {
      dispatch(logout());
    })
    .then(() => navigate('/'))
    .catch((err) => alert(err.message))
  }


  return (
  <>
    <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isSticky={false}/> 
    <div className={styles.account}>
      <div className={styles.account_header}>
        <div className={styles.accountInfo}>
          <h4>{user?.userName + "'s"} Tesla</h4>
        </div>
        <div className={styles.accountNav}>
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={logOut}>Log out</Link>
        </div>
      </div>
      <div className={styles.account_content}>
        <Card imgSrc={modelofs} name='model s' />
        <Card imgSrc={modelofx} name='model x' />
      </div>
    </div>

    <Footer />
  </>
  )
}

export default TeslaAccount
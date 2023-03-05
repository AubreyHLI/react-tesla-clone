import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import styles from '../styles/Login.module.css';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import logo from '../images/tesla-logo.png';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPW, setConfirmedPW] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        if(password !== confirmedPW) {
            return alert('Passwords does not match')
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then( userAuth => {
            if(userAuth) {
                updateProfile(auth.currentUser, { displayName: username })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        userId: userAuth.user.uid,
                        userName: username
                    }));
                    navigate('/teslaaccount');
                })
            }
        })
        .catch( err => alert(err.message) );
    }


    const validateInputs = () => {
        return !username.trim() || !email.trim() || !password.trim() || !confirmedPW.trim();
    }


    return (
    <div className={styles.login}>
        <div className={styles.header}>
            <div className='login_logo'>
                <Link to='/'><img alt='' src={logo} className='logoImg' /></Link>
            </div>
        </div>
        <div className={styles.content}>
            <h1>Sign Up</h1>
            <form className={styles.form}>
                <Input labelText='Username' type='text' inputName='username' inputValue={username} setInputValue={setUsername}/>
                <Input labelText='Email' type='text' inputName='email' inputValue={email} setInputValue={setEmail}/>
                <Input labelText='Password' type='password' inputName='password' inputValue={password} setInputValue={setPassword}/>
                <Input labelText='Confirmed password' type='password' inputName='confirmedPW' inputValue={confirmedPW} setInputValue={setConfirmedPW}/>
                <button type='submit' onClick={signUp} disabled={validateInputs()}>sign up</button>
            </form>
            <div className={styles.divider}>
                <hr /> <span>OR</span> <hr />
            </div>
            <button className={styles.btn_secondary}onClick={() => navigate('/login')}>log in with existing account</button>
        </div>
    </div>
    )
}

export default Signup
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import styles from '../styles/Login.module.css';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import logo from '../images/tesla-logo.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logIn = async (e) => {
        e.preventDefault();
        console.log('click log in');
        try{
            const userAuth = await signInWithEmailAndPassword(auth, email, password);
            console.log('log in dispatch');
            dispatch(login({
                email: userAuth.user.email,
                userId: userAuth.user.uid,
                userName: userAuth.user.displayName
            }));
            navigate('/teslaaccount');
        } catch(err) {
            alert(err.message);
        }

        // .then( userAuth => {
        //     console.log('log in dispatch');
        //     dispatch(login({
        //         email: userAuth.user.email,
        //         userId: userAuth.user.uid,
        //         userName: userAuth.user.displayName
        //     }));
            
        // })
        // .catch( err => alert(err.message) );
    }

    
    const validateInputs = () => {
        return (!email.trim() || !password.trim());
    }


    return (
    <div className={styles.login}>
        <div className={styles.header}>
            <div className='login_logo'>
                <Link to='/'><img alt='' src={logo} className='logoImg' /></Link>
            </div>
        </div>
        <div className={styles.content}>
            <h1>Log In</h1>
            <form className={styles.form}>
                <Input labelText='Email' type='text' inputName='email' inputValue={email} setInputValue={setEmail}/>
                <Input labelText='Password' type='password' inputName='password' inputValue={password} setInputValue={setPassword}/>
            </form>
            <button className={styles.formBtn} onClick={logIn} disabled={validateInputs()}>log in</button>
            <div className={styles.divider}>
                <hr /> <span>OR</span> <hr />
            </div>
            <button className={styles.btn_secondary} onClick={() => navigate('/signup')}>create account</button>
        </div>
    </div>
    )
}

export default Login 
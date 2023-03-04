import React, { useState }from 'react';
import styles from '../styles/Input.module.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const Input = ({ labelText, type, inputName, inputValue, setInputValue}) => {
    // const [inputInfo, setInputInfo] = useRecoilState(inputInfoState);
    // const [isInputActive, setIsInputActive] = useState(false);
    const [pwVisible, setPsVisible] = useState(false);

    let inputType = type !=='password' ? type : (pwVisible ? 'text' : 'password');

    // Update specific input field
    const handleInputChange = e => {
        e.preventDefault();
        setInputValue(e.target.value);
        // setInputInfo(prevState => ({
        //     ...prevState, 
        //     [e.target.name]: e.target.value
        // }))
    }

    
  return (
    <div className={styles.customInput}>
        <label htmlFor={inputName}>{labelText}</label>
        <input 
            type={inputType} 
            id={inputName} 
            name={inputName} 
            onChange={handleInputChange} 
            value={inputValue}
        />
       { type === 'password' && (
        <span className={styles.password_eye} onClick={() => setPsVisible(prev => !prev)}>
            {!pwVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </span>
        )}
    </div>
    
  )
}

export default Input
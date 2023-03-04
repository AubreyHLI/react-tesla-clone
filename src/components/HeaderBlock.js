import React, { useState, useRef, useEffect }from 'react';
import styles from '../styles/HeaderBlock.module.css';

const HeaderBlock = ({ imgurl, title}) => {
    const [isVisible, setIsVisible] = useState(false);
    const blockRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            setIsVisible(entry.isIntersecting);
            // console.log(title + ', isIntersecting:' + entry.isIntersecting);
          })
        });
        observer.observe(blockRef.current);
        return () => observer.disconnect()
    }, []);
    
    
  return (
    <div className={`${styles.headerblock} ${title}`} style={{backgroundImage: 'url('+ imgurl + ')'}}>
        <div className={`${styles.info} ${isVisible && styles.active}`}>
            <h1 ref={blockRef}>{ title }</h1>
            <h4><span>Explore Supercharging</span></h4>
            <div className={styles.info_buttons}>
                <button className={styles.btn_primary}>custom order</button>
                <button className={styles.btn_secondary}>learn more</button>
            </div>
        </div>
        
    </div>
  )
}

export default HeaderBlock
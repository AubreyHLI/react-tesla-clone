import React from 'react'
import styles from '../styles/Card.module.css'

const Card = ({ imgSrc, name, }) => {
  return (
    <div className={styles.card}>
        <div className={styles.imageBox}>
            <img src={imgSrc} alt='' />
        </div>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.buttons}>
            <button>order</button>
            <button>test drive</button>
        </div>
        <p className={styles.more}>
            <span>Request a Call</span> to speak with a product specialist, value your trade-in or apply for leasing
        </p>
    </div>
  )
}

export default Card
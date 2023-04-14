import React from 'react'

import styles from './styles.module.scss'
export default function Main() {
  return (
    <div className={styles.main}>
        <div className={styles.header}>header</div>
        <div className={styles.menu}> menu </div>
        <div className={styles.swipper}> swipper</div>
        <div className={styles.offers}>offer</div>
        <div className={styles.user}> user </div>
    </div>
  )
}

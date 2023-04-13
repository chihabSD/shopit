import React from 'react'
import styles from "./style.module.scss";
export default function UserMenu({loggedin}) {
  return (
    <div className={styles.menu}>
        <h4>Welcome to shopit</h4>
        {loggedin ? <div className={styles.flex}>
        <img className={styles.menu__img}
              src="https://res.cloudinary.com/doodo0tre/image/upload/v1680024410/letsChat/anita-austvika-9nbntSgETqQ-unsplash_ancqku.jpg"
              alt=""
            />
            <div className={styles.col}>
                
            </div>
        </div>:""}
    </div>
  )
}

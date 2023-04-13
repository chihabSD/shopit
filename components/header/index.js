
import Ad from './Ad'
import Top from './Top'
import styles from './style.module.scss'
export default function Header ({country}) {
  return (
    <header className={styles.header}>
        <Ad />
        <Top country={country} />
    </header>
  )
}


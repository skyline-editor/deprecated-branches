// Styles
import styles from './Topbar.module.css'

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <img src="/icons/folder_blue.svg" alt="Files" />
      <img src="/icons/search.svg" alt="Search" />
      <img src="/icons/git.svg" alt="Git" />
      <img src="/icons/extension.svg" alt="Extensions" />
    </div>
  )
}

export default Topbar

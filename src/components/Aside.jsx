import styles from './Aside.module.css'
import Logo from '../assets/logo.png'

function Aside() {

  return (
    <aside className={`${styles.sidemenu}`}>
        <img className={`${styles.logo}`} src={Logo} alt="logo" />

        <h1 className={`${styles.sidemenuHeading}`}>Nicequest OpenAI</h1>

        <a href="https://www.nicequest.com/es" target="_blank" rel="noopener noreferrer">
          www.nicequest.com/es
        </a>
        
        <p className={`${styles.rights}`}>
          Developed by Jordi Sanchez 2023. V. 1.0.2
        </p>

    </aside>
  )
}

export default Aside
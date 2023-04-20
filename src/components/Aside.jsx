import styles from './Aside.module.css'
import Logo from '../assets/logo.png'

function Aside() {

  return (
    <aside className={`${styles.sidemenu}`}>
        <img className='logo' src={Logo} alt="logo" />

        <p className='rights'>
          Developed by Jordi Sanchez 2023. V. 1.0.2
        </p>
    </aside>
  )
}

export default Aside
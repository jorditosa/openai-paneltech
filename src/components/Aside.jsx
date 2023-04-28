import { Link } from "react-router-dom";
import styles from "./Aside.module.css";
import Logo from "../assets/logo.png";
import { FaImage, FaRocketchat } from "react-icons/fa";

function Aside() {
  return (
    <aside className={`${styles.sidemenu}`}>
      <img className={`${styles.logo}`} src={Logo} alt="logo" />

      <h1 className={`${styles.sidemenuHeading}`}>Nicequest OpenAI</h1>

      <a
        href="https://www.nicequest.com/es"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.nicequest.com/es
      </a>

      <div>
        <ul className={styles.appBtns}>
          <li>
            <Link to="/" className={styles.chatInputBtn}>
              <FaRocketchat size={40} color="#125ae1" />
            </Link>
          </li>
          <li>
            <Link to="/img" className={styles.chatInputBtn}>
              <FaImage size={40} color="#ffc500" />
            </Link>
          </li>
        </ul>
       
      </div>

      <p className={`${styles.rights}`}>
        Developed by Jordi Sanchez 2023. V. 1.0.2
      </p>
    </aside>
  );
}

export default Aside;

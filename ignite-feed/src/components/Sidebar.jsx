import styles from "./Sidebar.module.css";
import banner from "../assets/banner.png";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={banner} />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/fcorleth.png"
        ></img>
        <strong>Fábio Corleth</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

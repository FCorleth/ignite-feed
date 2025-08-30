import styles from "./Sidebar.module.css";
import banner from "../assets/banner.png";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={banner} />
      <div className={styles.profile}>
        <Avatar src="https://github.com/fcorleth.png" />
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

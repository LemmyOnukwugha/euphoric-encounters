import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={"container"}>
        <div className={styles.content}>
          <Link to={"/"}>Euphoric Encounters</Link>
          <div>
            <FaUserAlt style={{ color: "var(--clr-white)" }} size={30} />
          </div>
        </div>
      </div>
    </header>
  );
}

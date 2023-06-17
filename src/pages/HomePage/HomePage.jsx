import Layout from "../../containers/Layout/Layout";
import styles from "./homePage.module.css";
import {
  FaTimes,
  FaCheck,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { TbMessage2 } from "react-icons/tb";

export default function HomePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.visuals}>
          <div className={styles.matchGallery}>
            <button className={styles.backwardBtn}>
              <FaAngleDoubleLeft size={50} />
            </button>
            <button className={styles.forwardBtn}>
              <FaAngleDoubleRight size={50} />
            </button>
          </div>
          <div className={styles.matchProfile}></div>
        </div>
        <div className={styles.matchCTA}>
          <button className={styles.ctaCancel}>
            <FaTimes size={80} className={styles.faTimes} />
          </button>
          <button className={styles.ctaMessage}>
            <TbMessage2 size={80} className={styles.tbMessages} />
          </button>
          <button className={styles.ctaAccept}>
            <FaCheck size={80} className={styles.faCheck} />
          </button>
        </div>
      </div>
    </Layout>
  );
}

import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { company, gc, products } from "../../Helper/data";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";

export default function Footer() {
  return (
    <footer>
      <div className={"container"}>
        <div className={styles.footerTop}>
          <h3>Connecting Hearts & Creating Stories</h3>
          <p>
            <Link>Visit Help Center</Link>
          </p>
        </div>
        <div className={styles.footerBody}>
          <div className={styles.company}>
            <h4>Company</h4>
            <ul>
              {company.map((item, index) => (
                <li className={styles.li} key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.products}>
            <h4>Products</h4>
            <ul>
              {products.map((item, index) => (
                <li className={styles.li} key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.gc}>
            <h4>Global Citizenship</h4>
            <ul>
              {gc.map((item, index) => (
                <li className={styles.li} key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerSAndL}>
            <div className={styles.footerS}>
              <ul className={styles.footerBtmSocials}>
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <AiOutlineInstagram className={styles.instagram} />
                </li>
                <li>
                  <AiFillLinkedin />
                </li>
              </ul>
            </div>
            <div className={styles.footerL}>
              <ul>
                <li>
                  <ImLocation2 /> Greater Toronto Area
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerEnd}>
            <div>
              <p>©2023 LionWare Technologies</p>
            </div>
            <div>
              <ul className={styles.footerTerms}>
                <li>Privacy</li>
                <li>Accessibility</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

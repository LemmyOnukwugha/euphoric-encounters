import { GiSuitcase, GiGraduateCap, GiHouse } from "react-icons/gi";

import { VscLocation } from "react-icons/vsc";
import styles from "./matchProfile.module.css";
import { MdVerified } from "react-icons/md";

export default function MatchProfile() {
  return (
    <div className={styles.matchProfileSection}>
      <div className={styles.matchProfileHeader}>
        <h3 className={styles.matchProfileName}>Brett</h3>
        <p className={styles.matchProfileAge}>24</p>
        <p>
          <MdVerified className={styles.matchProfileVerified} />
        </p>
      </div>
      <ul className={styles.matchProfileList}>
        <li>
          <GiSuitcase className={styles.matchProfileIcons} />
        </li>
        <li>
          <GiGraduateCap className={styles.matchProfileIcons} />
          Lorain County Community College
        </li>
        <li>
          <GiHouse className={styles.matchProfileIcons} />
          Lives in Grafton
        </li>
        <li>
          <VscLocation className={styles.matchProfileIcons} />
          23 miles away
        </li>
      </ul>
      <hr />
      <h5 className={styles.matchProfileSubHeadings}>About Me</h5>
      <p className={styles.matchProfileAboutMe}>Undefeated in Mario Party.</p>
      <p className={styles.matchProfileAboutMe}>4 time pong world champ.</p>
      <p className={styles.matchProfileAboutMe}>
        Certified fork lift driver (circa 2021).
      </p>
      <p className={styles.matchProfileAboutMe}>
        Current Guinness World Record Holder
      </p>
      <hr />
      <h5 className={styles.matchProfileSubHeadings}>My Interests</h5>
      <ul className={styles.matchProfileInterestsList}>
        <li className={styles.interestsItems}>Music</li>
        <li className={styles.interestsItems}>Movies</li>
        <li className={styles.interestsItems}>Art</li>
        <li className={styles.interestsItems}>Parties</li>
        <li className={styles.interestsItems}>Gym</li>
      </ul>
    </div>
  );
}

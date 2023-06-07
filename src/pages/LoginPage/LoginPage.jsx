import styles from "./loginPage.module.css";
import Button from "../../components/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsFacebook } from "react-icons/bs";

export default function LoginPage() {
  return (
    <div className={styles.loginpage}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Euphoric Encounters</h1>
        </div>
        <div className={styles.login_cta}>
          <h2>Login Below</h2>
          <Button>
            <FcGoogle size={25} className={styles.icon} />
            Login With Google
          </Button>
          <Button>
            <BsApple size={25} className={styles.icon} color={"#000000"} />
            Login With Apple
          </Button>
          <Button>
            <BsFacebook size={25} color={"#4267B2"} className={styles.icon} />
            Login With FaceBook
          </Button>
        </div>
      </div>
    </div>
  );
}

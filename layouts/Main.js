import Head from "../components/Head";
import styles from "./Main.scss";

export default ({ children }) => (
  <div>
    <Head title="Test" excerpt="Ahoj" />
    <header></header>
    <main className={styles["main"]}>{children}</main>
  </div>
);

import Head from "../Head";
import { Link } from "../../routes";
import Header from "../Header";
import styles from "./Layout.scss";
import { PostHome, PostDetail } from "../Post";
import classnames from "classnames";

export const LayoutHome = ({ data }) => (
  <>
    <Head />
    <Header />
    <main className={classnames(styles["main"], styles["main--home"])}>
      {data.map(p => (
        <PostHome key={p.order} post={p} />
      ))}
    </main>
    <footer className={styles["main__footer"]}>
      &copy; 2017–2019 venkuzaseprsi.cz
    </footer>
  </>
);

export const LayoutPost = ({ data }) => (
  <>
    <Head title={data.title} excerpt={data.excerpt} />
    <Header />
    <main className={classnames(styles["main"], styles["main--post"])}>
      <PostDetail post={data} />
    </main>
  </>
);

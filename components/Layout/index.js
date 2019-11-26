import Head from "../Head";
import Header from "../Header";
import styles from "./Layout.scss";
import { PostHome, PostDetail } from "../Post";
import classnames from "classnames";

export const LayoutHome = ({ data }) => (
  <>
    <Head />
    <Header type="home" />

    <main className={classnames(styles["main"], styles["main--home"])}>
      {data.map(p => (
        <PostHome key={p.order} post={p} />
      ))}
    </main>
    
    <footer className={styles["main__footer"]}>
      <div className={styles["footer__icons"]}>
        <a>Spotify</a>
        <a>Email</a>
        <a>FB</a>
      </div>
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

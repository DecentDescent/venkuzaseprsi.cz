import Head from "../Head";
import Header from "../Header";
import Cursor from "../Cursor";
import styles from "./Layout.scss";
import { PostHome, PostDetail } from "../Post";
import classnames from "classnames";

const d = new Date();
const n = d.getFullYear();

export const LayoutHome = ({ data }) => (
  <>
    <Head />
    <div className={styles["scollable-wrapper"]}>
      <Header type="home" />
      <Cursor />
      <main className={classnames(styles["main"], styles["main--home"])}>
        {data.map(p => (
          <PostHome key={p.order} post={p} />
        ))}
      </main>

      <footer className={styles["main__footer"]}>
        &copy; 2017–{n} venkuzaseprsi.cz
      </footer>
    </div>
  </>
);

export const LayoutPost = ({ data }) => (
  <>
    <Head title={data.title} excerpt={data.excerpt} />
    <Header />
    <Cursor />
    <main className={classnames(styles["main"], styles["main--post"])}>
      <PostDetail post={data} />
    </main>
  </>
);

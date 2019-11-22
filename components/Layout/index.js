import Head from "../Head";
import Header from "../Header";
import styles from "./Layout.scss";
import classnames from "classnames";

export const LayoutHome = ({ children }) => (
  <>
    <Head title="Test" excerpt="Ahoj" />
    <Header />
    <main className={styles["main"]}>{children}</main>
  </>
);

export const LayoutPage = ({ children }) => (
  <>
    <Head title="Test" excerpt="Ahoj" />
    <Header />
    <main className={styles["main"]}>{children}</main>
  </>
);

export const LayoutPost = ({ imageAuthor, imageLink, image, children }) => (
  <>
    <Head title="Test" excerpt="Ahoj" />
    <Header />
    <main className={classnames(styles["main"], styles["main--post"])}>
      <div
        className={[styles["post__image"]]}
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(" +
            image +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className={styles["image__credit"]}>
          <a href={imageLink} target="_blank">
            <span>&copy;</span> {imageAuthor}
          </a>
        </div>
      </div>
      <div className={[styles["post__article"]]}>
        <article>{children}</article>
      </div>
    </main>
  </>
);

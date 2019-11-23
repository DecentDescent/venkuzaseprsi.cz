import Head from "../Head";
import Header from "../Header";
import styles from "./Layout.scss";
import classnames from "classnames";

export const LayoutHome = ({ children }) => (
  <>
    <Head />
    <Header />
    <main className={classnames(styles["main"], styles["main--home"])}>
      {children}
    </main>
  </>
);

export const LayoutPage = ({ children }) => (
  <>
    <Head title="Test" excerpt="Ahoj" />
    <Header />
    <main className={styles["main"]}>{children}</main>
  </>
);

export const LayoutPost = ({
  title,
  excerpt,
  order,
  imagePosition,
  song,
  songURL,
  image,
  children
}) => (
  <>
    <Head title={title} excerpt={excerpt} />
    <Header />
    <main className={classnames(styles["main"], styles["main--post"])}>
      <div
        className={[styles["post__image"]]}
        style={{
          background:
            "linear-gradient(90deg, rgba(25, 43, 63,0.8) 0%, rgba(25, 43, 63,0.9) 100%), url(" +
            image +
            ")",
          backgroundSize: "cover",
          backgroundPosition: imagePosition
        }}
      >
        <div
          className={[styles["image__mask"]]}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: imagePosition
          }}
        >
          {order < 10 ? "0" + order : order}
        </div>

        <div className={styles["song"]}>
          <a href={songURL}>{song}</a>
          <div className={styles["song__spotify"]}>
            <svg viewBox="0 0 427.652 427.652">
              <path
                d="m213.826 0c-118.093 0-213.826 95.733-213.826 213.826s95.733 213.826 213.826 213.826 213.826-95.733 213.826-213.826-95.733-213.826-213.826-213.826zm93.06 310.32c-2.719 4.652-7.612 7.246-12.638 7.247-2.506 0-5.044-.645-7.364-2-38.425-22.456-82.815-26.065-113.295-25.138-33.763 1.027-58.523 7.692-58.769 7.76-7.783 2.126-15.826-2.454-17.961-10.236-2.134-7.781 2.43-15.819 10.209-17.962 1.116-.307 27.76-7.544 64.811-8.766 21.824-.72 42.834.801 62.438 4.52 24.83 4.71 47.48 12.978 67.322 24.574 6.973 4.074 9.321 13.03 5.247 20.001zm27.184-56.459c-3.22 5.511-9.016 8.583-14.97 8.584-2.968 0-5.975-.763-8.723-2.369-45.514-26.6-98.097-30.873-134.2-29.776-39.994 1.217-69.323 9.112-69.614 9.192-9.217 2.515-18.746-2.906-21.275-12.124-2.528-9.218 2.879-18.738 12.093-21.277 1.322-.364 32.882-8.937 76.77-10.384 25.853-.852 50.739.949 73.96 5.354 29.412 5.58 56.241 15.373 79.744 29.108 8.26 4.826 11.042 15.434 6.215 23.692zm16.711-51.335c-3.641 0-7.329-.936-10.7-2.906-108.207-63.238-248.572-25.643-249.977-25.255-11.313 3.117-23.008-3.527-26.124-14.839-3.117-11.312 3.527-23.008 14.839-26.124 1.621-.447 40.333-10.962 94.166-12.737 31.713-1.044 62.237 1.164 90.72 6.567 36.077 6.844 68.987 18.856 97.815 35.704 10.13 5.92 13.543 18.931 7.623 29.061-3.95 6.76-11.059 10.529-18.362 10.529z"
                fill="#00d95f"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={[styles["post__article"]]}>
        <article>{children}</article>
      </div>
    </main>
  </>
);

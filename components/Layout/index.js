import Head from "../Head";
import Header from "../Header";
import Cursor from "../Cursor";
import styles from "./Layout.scss";
import { PostHome, PostDetail } from "../Post";
import classnames from "classnames";
import ReactGA from "react-ga";

const d = new Date();
const n = d.getFullYear();

export class LayoutHome extends React.Component {
  componentDidMount() {
    ReactGA.initialize("UA-50377630-2");
  }
  render() {
    return (
      <>
        <Cursor />
        <div className={styles["page"]}>
          <Head />
          <Header type="home" />
          <main className={classnames(styles["main"], styles["main--home"])}>
            {this.props.data.map(p => (
              <PostHome key={p.order} post={p} />
            ))}
          </main>
          <footer className={styles["main__footer"]}>
            &copy; 2017–{n} venkuzaseprsi.cz
          </footer>
        </div>
      </>
    );
  }
}

export class LayoutPost extends React.Component {
  componentDidMount() {
    ReactGA.initialize("UA-50377630-2");
  }
  render() {
    return (
      <>
        <Cursor />
        <div className={styles["page"]}>
          <Head
            title={this.props.data.title}
            excerpt={this.props.data.excerpt}
            image={this.props.data.image}
          />
          <main className={classnames(styles["main"], styles["main--post"])}>
            <PostDetail post={this.props.data} />
          </main>
        </div>
      </>
    );
  }
}

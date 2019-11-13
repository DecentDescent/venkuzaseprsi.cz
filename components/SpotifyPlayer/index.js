import styles from "./SpotifyPlayer.scss";
import SpotifyPlayer from "react-spotify-player";
import classnames from "classnames";

export default ({ opened, URI }) => (
  <div className={styles["spotify-player-container"]}>
    {opened ? (
      <div className={styles["spotify-player"]}>
        <SpotifyPlayer
          uri={URI}
          view="list"
          theme="white"
          size={{
            width: "100%",
            height: 80
          }}
        />
      </div>
    ) : null}
  </div>
);

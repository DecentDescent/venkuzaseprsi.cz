import styles from "./Cursor.scss";
import { TweenMax } from "gsap";

class Cursor extends React.Component {
  componentDidMount() {
    const cursor = document.getElementById("cursor");
    const cursorFollower = document.getElementById("cursor-follower");
    const linkables = document.querySelectorAll('[gsap="true"]');

    var posX = 0,
      posY = 0;

    var mouseX = 0,
      mouseY = 0;

    TweenMax.to({}, 0.005, {
      repeat: -1,
      onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(cursorFollower, {
          css: {
            left: posX - 12,
            top: posY - 12
          }
        });

        TweenMax.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY
          }
        });
      }
    });

    document.addEventListener("mousemove", function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    linkables.forEach(function(linkable) {
      linkable.addEventListener("mouseenter", function() {
        cursor.classList.add(styles["cursor--active"]);
        cursorFollower.classList.add(styles["cursor-follower--active"]);
      });

      linkable.addEventListener("mouseleave", function() {
        cursor.classList.remove(styles["cursor--active"]);
        cursorFollower.classList.remove(styles["cursor-follower--active"]);
      });
    });
  }

  render() {
    return (
      <>
        <div className={styles["cursor"]} id="cursor"></div>
        <div className={styles["cursor-follower"]} id="cursor-follower"></div>
      </>
    );
  }
}

export default Cursor;

import styles from "./Cursor.scss";
import { TweenMax } from "gsap";
import { CSSPlugin } from "gsap";
import classnames from "classnames";

class Cursor extends React.Component {
  componentDidMount() {
    if ("ontouchstart" in document.documentElement) {
      console.log("Hello");
    } else {
      const plugins = [CSSPlugin];
      const cursor = document.getElementById("cursor");
      const cursorFollower = document.getElementById("cursor-follower");
      const linkables = document.querySelectorAll('[gsap="true"]');

      cursor.classList.remove(styles["cursor--hide"]);
      cursorFollower.classList.remove(styles["cursor-follower--hide"]);
      var posX = -100,
        posY = -100;

      var mouseX = -100,
        mouseY = -100;

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
  }

  render() {
    return (
      <>
        <div
          className={classnames({
            [styles["cursor"]]: true,
            [styles["cursor--hide"]]: true
          })}
          id="cursor"
        ></div>
        <div
          className={classnames({
            [styles["cursor-follower"]]: true,
            [styles["cursor-follower--hide"]]: true
          })}
          id="cursor-follower"
        ></div>
      </>
    );
  }
}

export default Cursor;

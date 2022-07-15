import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment() {
 
  
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/paulomigueljs.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Paulo Miguel</strong>
              <time title="May, 11 08:13am" dateTime="2022-05-11 08:13:30">
                About 2h ago
              </time>
            </div>
            <button title="Delete this comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Very Nice!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Applaud <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

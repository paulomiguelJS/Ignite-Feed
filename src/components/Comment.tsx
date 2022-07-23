import { Trash, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteCommenet: (comment: string) => void;
}

export function Comment({ content, onDeleteCommenet }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    console.log("Delete");
    onDeleteCommenet(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }
  
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
            <button onClick={handleDeleteComment} title="Delete this comment">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Applaud <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

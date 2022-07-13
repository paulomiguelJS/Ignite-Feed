import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";


export function Post({author}) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="May, 11 08:13am" dateTime="2022-05-11 08:13:30">
          Published 1 hour ago
        </time>
      </header>
      <div className={styles.content}></div>

      <form className={styles.commentForm}>
        <strong>Leave your comment</strong>
        <textarea placeholder="Leave an comment"></textarea>
        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>
      <div className="styles.commentList">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

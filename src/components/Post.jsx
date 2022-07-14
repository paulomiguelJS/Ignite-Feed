import { format, formatDistanceToNow } from "date-fns";
import enUS from "date-fns/locale/en-US";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(publishedAt, "LLLL',' d 'at' h:mmaaa", {
    locale: enUS,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enUS,
    addSuffix: true,
  });

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

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

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

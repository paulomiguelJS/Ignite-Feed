import { format, formatDistanceToNow } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [newCommentText, setNewCommentText] = useState([]);   //Captura  o novo comentário

  const [comments, setComments] = useState([]); // Adiciona o coment[ario 


  const publishedDateFormatted = format(publishedAt, "LLLL',' d 'at' h:mmaaa", {
    locale: enUS,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enUS,
    addSuffix: true,
  });

  function handleNewComment({target}) {   //  Pega o comentario digitado no textarea
    event.preventDefault();                // Previne o padrao
    setNewCommentText(target.value);   // Pega o valor digitado pelo o usuario
  }

  function handleCreateNewComment(event) {    //  Adiciona o comentario digitado na funcao acima
    event.preventDefault();    // Previne o padrao
    setComments([...comments, newCommentText]);  // Recebe os comentarios ja existentes, caso ja exista e adiciona um novo comentario, capaturado pela a funcao acima
    setNewCommentText('')  // Limpa o textarea
  }


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

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your comment</strong>
        <textarea
          name="comment"
          onChange={handleNewComment}
          value={newCommentText}
          placeholder="Leave an comment"
        ></textarea>
        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>
      <div className="styles.commentList">
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}

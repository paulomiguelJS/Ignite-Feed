import { format, formatDistanceToNow } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { ChangeEvent, FormEvent, useState, InvalidEvent } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [newCommentText, setNewCommentText] = useState([]); //Captura  o novo comentário

  const [comments, setComments] = useState([]); // Adiciona o coment[ario

  console.log(newCommentText);

  const publishedDateFormatted = format(publishedAt, "LLLL',' d 'at' h:mmaaa", {
    locale: enUS,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enUS,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
   
    event.preventDefault(); 

    setComments([...comments, newCommentText]); 
    setNewCommentText(""); 
  }

  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value); 
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Please, fill out this field");
  }

  function deleteCommenet(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
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
          required
          onInvalid={handleNewCommentInvalid}
        ></textarea>
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comment
          </button>
        </footer>
      </form>
      <div className="styles.commentList">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteCommenet={deleteCommenet}
            />
          );
        })}
      </div>
    </article>
  );
}

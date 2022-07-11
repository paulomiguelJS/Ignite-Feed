import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/paulomigueljs.png"
            alt="Profile Photo"
          />
          <div className={styles.authorInfo}>
            <strong>Paulo Miguel</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="May, 11 08:13am" dateTime="2022-05-11 08:13:30">Published 1 hour ago</time>
      </header>
      <div className={styles.content}>
        <p>Fala pessoal 👋</p>
        <p>
          Finalmente finalizei meu novo site/portfólio. Foi um baita desafio
          criar todo o design e codar na unha, mas consegui 💪🏻 Acesse e deixe
          seu feedback
        </p>
        <p>
          👉<a href="">paulomigueljs/github</a>
        </p>
        <p>
          <a href=""> devonlane.design #uiux #userexperience</a>{" "}
        </p>
      </div>
    </article>
  );
}

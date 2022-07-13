import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/paulomigueljs.png",
      name: "Paulo Miguel",
      role: " Front End Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 Acesse e deixe seu feedback",
      },
      { type: "link", content: "👉paulomigueljs/github" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/CaioAugustoo.png",
      name: "Caio Augusto",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 Acesse e deixe seu feedback",
      },
      { type: "link", content: "👉paulomigueljs/github" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
];


export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar  />
        <main>
        {posts.map(post => {
          return (
          <Post 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
          )
        })}
        </main>
      </div>
    </>
  );
}

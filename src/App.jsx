import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar'

import styles from "./components/App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar  />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}

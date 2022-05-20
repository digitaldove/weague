import type { Component } from "solid-js";

import Menu from "src/components/Menu";
import SEO from "src/components/SEO";
import Wordle from "src/components/Wordle";

import styles from "src/App.module.css";

const App: Component = () => {
  let ref = (<input />) as HTMLInputElement;
  return (
    <div
      class={styles.App}
      onClick={() => {
        console.log("focusing");
        ref.focus();
      }}
    >
      <SEO />
      <header class={"border-b-2 border-gray-500 " + styles.header}>
        <Menu />
      </header>
      <div class={styles.body}>
        <Wordle ref={ref} />
      </div>
    </div>
  );
};

export default App;

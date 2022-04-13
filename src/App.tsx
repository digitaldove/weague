import type { Component } from "solid-js";

// import logo from "./logo.svg";
import styles from "./App.module.css";
import Menu from "./components/Menu";
import SEO from "./components/SEO";
import Wordle from "./components/Wordle";

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
      <header class={styles.header}>

      <Menu />
      </header>
      <div class={styles.body}>
        <Wordle ref={ref} />
      </div>
    </div>
  );
};

export default App;

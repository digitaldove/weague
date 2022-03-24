import type { Component } from "solid-js";

// import logo from "./logo.svg";
import styles from "./App.module.css";
import Menu from "./components/Menu";
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
      <header class={styles.header}>
        <Menu />
        <Wordle ref={ref} />
      </header>
    </div>
  );
};

export default App;

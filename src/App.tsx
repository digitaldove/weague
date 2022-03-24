import type { Component } from "solid-js";

// import logo from "./logo.svg";
import styles from "./App.module.css";
import Menu from "./components/Menu";
import Wordle from "./components/Wordle";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        {/* <img src={logo} class={styles.logo} alt="logo" /> */}
        <Menu />
        <Wordle />
      </header>
    </div>
  );
};

export default App;

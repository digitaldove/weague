import { Component, createSignal } from "solid-js";
import InputGroup from "./InputGroup";

const Wordle: Component = () => {
  const [input, setInput] = createSignal("abcde");
  const [guess, setGuess] = createSignal([]);

  return (
    <>
      <input
        autofocus
        onInput={(e) => {
          setInput(e.currentTarget.value);
        }}
      />
      <InputGroup input={input()} />
    </>
  );
};

export default Wordle;

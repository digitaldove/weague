import { Component, createSignal, JSX } from "solid-js";
import InputGroup from "./InputGroup";

interface Props {
  ref: HTMLInputElement;
}

const Wordle: Component<Props> = ({ ref }) => {
  const [input, setInput] = createSignal("abcde");
  const [guess, setGuess] = createSignal([]);

  return (
    <>
      <input
        // Hide input element
        ref={ref}
        style={{ "z-index": -1, position: "absolute", top: 0, left: 0 }}
        autofocus
        onInput={(e) => {
          console.log(e.currentTarget.value);
          setInput(e.currentTarget.value);
        }}
        onBlur={(e) => {
          console.log("out of focus")
        }}
        onFocus={(e) => {
          console.log("focusing")
        }}
      />
      <InputGroup input={input()} />
    </>
  );
};

export default Wordle;

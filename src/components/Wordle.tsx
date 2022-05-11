import { Component, createSignal } from "solid-js";
import { guessWordle } from "../wordle/wordle";
import InputGroup from "./InputGroup";

interface Props {
  ref: HTMLInputElement;
}

const Wordle: Component<Props> = ({ ref }) => {
  const answer = "mango";

  const [input, setInput] = createSignal<string>("");
  const [guess, setGuess] = createSignal<string[]>([]);

  console.log(input());
  return (
    <>
      <input
        // Hide input element
        value={input()}
        ref={ref}
        style={{ "z-index": -1, position: "absolute", top: 0, left: 0 }}
        autofocus
        // onKeyPress={(e) => {}}
        onInput={(e) => setInput(e.currentTarget.value)}
        maxLength={5}
        onBlur={(e) => {
          console.log("out of focus");
        }}
        onKeyPress={(e) => {
          //
          if (e.key === "Enter" && input().length === 5) {
            guessWordle(input(), answer);
            setGuess([...guess(), input()]);
            setInput("");
          }
          console.debug("guess", guess());
        }}
      />
      <InputGroup input={input()} />
    </>
  );
};

export default Wordle;

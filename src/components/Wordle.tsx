import { Component, createSignal, For } from "solid-js";
import { guessWordle } from "../wordle/wordle";
import AnswerGroup from "./AnswerGroup";
import InputBox from "./InputBox";
import InputGroup from "./InputGroup";

interface Props {
  ref: HTMLInputElement;
}

const Wordle: Component<Props> = ({ ref }) => {
  const answer = "mango";

  const [input, setInput] = createSignal<string>("");
  const [guess, setGuess] = createSignal<{ input: string; result: string }[]>(
    []
  );

  return (
    <div className="grid gap-2">
      <For each={guess()}>{(guess, i) => <AnswerGroup guess={guess} />}</For>

      {/* <div style={{ padding: "5rem" }}/> */}
      <input
        // Hide input element
        value={input()}
        ref={ref}
        style={{ "z-index": -1, position: "absolute", top: 0, left: 0 }}
        autofocus
        onInput={(e) => setInput(e.currentTarget.value)}
        maxLength={5}
        // onBlur={() => {
        //   console.log("out of focus");
        // }}
        onKeyPress={(e) => {
          if (e.key === "Enter" && input().length === 5) {
            // guessWordle(input(), answer);

            // Add guess into array and reset the current input
            setGuess([
              ...guess(),
              { input: input(), result: guessWordle(input(), answer) },
            ]);
            setInput("");
            console.debug("guess", guess());
          }
        }}
      />
      <InputGroup input={input()} />
    </div>
  );
};

export default Wordle;

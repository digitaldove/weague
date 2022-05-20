import { Component, createSignal, For } from "solid-js";
import { guessWordle } from "src/wordle/wordle";
import AnswerGroup from "src/components/AnswerGroup";
import InputGroup from "src/components/InputGroup";

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
    <div class="grid gap-2">
      <div class="h-[100px]">
        <input
          // Hide input element
          value={input()}
          ref={ref}
          style={{ "z-index": -1, position: "absolute", top: 0, left: 0 }}
          autofocus
          onInput={(e) => setInput(e.currentTarget.value)}
          maxLength={5}
          onKeyPress={(e) => {
            if (e.key === "Enter" && input().length === 5) {
              // Add guess into array and reset the current input
              setGuess([
                { input: input(), result: guessWordle(input(), answer) },
                ...guess(),
              ]);
              setInput("");
              console.debug("guess", guess());
            }
          }}
        />
        <InputGroup input={input()} />
      </div>
      <div class="w-[400px] h-[400px] overflow-auto grid gap-2 content-start border-2 p-4 border-gray-500">
        <For each={guess()}>{(guess, _) => <AnswerGroup guess={guess} />}</For>
      </div>
    </div>
  );
};

export default Wordle;

import { Component, For } from "solid-js";
import AnswerBox from "./AnswerBox";

interface Props {
  guess: {
    input: string;
    result: string;
  };
}

const AnswerGroup: Component<Props> = (props: Props) => {
  return (
    <div class="grid grid-cols-5 gap-2">
      <For each={props.guess.input.split("")}>
        {(_, index) => (
          <AnswerBox
            guess={props.guess.input.charAt(index())}
            result={props.guess.result.charAt(index())}
          />
        )}
      </For>
    </div>
  );
};

export default AnswerGroup;

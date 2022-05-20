import { Component, Match, Switch } from "solid-js";
import { GuessResult } from "src/wordle/wordle";

interface Props {
  guess: string;
  result: string;
}

const AnswerBox: Component<Props> = (props: Props) => {
  return (
    <Switch>
      <Match when={props.result === GuessResult.Incorrect}>
        <div class="border-2 border-gray-600 w-[4rem] h-[4rem] leading-[3.8rem]">
          {props.guess.toUpperCase()}
        </div>
      </Match>
      <Match when={props.result === GuessResult.Partial}>
        <div class="border-2 border-orange-300 w-[4rem] h-[4rem] leading-[3.8rem]">
          {props.guess.toUpperCase()}
        </div>
      </Match>
      <Match when={props.result === GuessResult.Correct}>
        <div class="border-2 border-green-300 w-[4rem] h-[4rem] leading-[3.8rem]">
          {props.guess.toUpperCase()}
        </div>
      </Match>
    </Switch>
  );
};

export default AnswerBox;

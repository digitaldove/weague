import { Component } from "solid-js";

interface Props {
  guess: string;
  result: string;
}

const AnswerBox: Component<Props> = (props: Props) => {
  switch (props.result) {
    case "0":
      return (
        <div class="border-2 border-gray-300 w-[60px] h-[80px] leading-loose">
          {props.guess.toUpperCase()}
        </div>
      );
    case "1":
      return (
        <div class="border-2 border-orange-300 w-[60px] h-[80px] leading-loose">
          {props.guess.toUpperCase()}
        </div>
      );

    case "2":
      return (
        <div class="border-2 border-green-300 w-[60px] h-[80px] leading-loose">
          {props.guess.toUpperCase()}
        </div>
      );
  }
};

export default AnswerBox;

import { Component } from "solid-js";

interface Props {
  input: string;
}

const InputBox: Component<Props> = (props: Props) => {
  return <div class="border-2 border-gray-300 aspect-square w-[60px] h-[80px] leading-loose">{props.input.toUpperCase()}</div>;
};

export default InputBox;

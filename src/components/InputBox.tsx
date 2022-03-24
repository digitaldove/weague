import { Component } from "solid-js";

interface Props {
  input: string;
}

const InputBox: Component<Props> = (props: Props) => {
  return <div class="border-2 border-orange-300 p-2 mx-2">{props.input.toUpperCase()}</div>;
};

export default InputBox;

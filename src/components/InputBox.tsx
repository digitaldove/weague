import { Component } from "solid-js";

interface Props {
  input: string;
}

const InputBox: Component<Props> = (props: Props) => {
  return (
    <div class="border-2 border-gray-600 aspect-square w-[4rem] h-[4rem] leading-[3.8rem]">
      {props.input.toUpperCase()}
    </div>
  );
};

export default InputBox;

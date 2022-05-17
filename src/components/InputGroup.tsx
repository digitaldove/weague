import { Component, For } from "solid-js";
import InputBox from "./InputBox";

interface Props {
  input: string;
}

const InputGroup: Component<Props> = (props: Props) => {
  return (
    <div class="grid grid-cols-5 gap-2 mt-10">
      <For each={props.input.split("")}>
        {(char) => <InputBox input={char} />}
      </For>
    </div>
  );
};

export default InputGroup;

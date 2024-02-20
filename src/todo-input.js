import { html } from "./utils.js";

export function TodoInput(props) {
  return html` <input
    class="todo-input"
    type="text"
    placeholder="What needs to be done?"
    autofocus
    onKeyDown=${(e) => {
      //1
      if (e.key === "Enter" && !e.isComposing) {
        const string = e.target.value.trim();
        if (string) {
          //2
          props.onAddItem(string);
          e.target.value = "";
        }
      }
    }}
  />`;
}

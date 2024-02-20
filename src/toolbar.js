import { html } from "./utils.js";

export function Toolbar(props) {
  let toolbarClass = "todo-list__menu";
  if (props.items.length === 0) {
    toolbarClass += " todo0list__menu--hiding";
  }
  return html` <div class=${toolbarClass}>
    <div class="menu__count">
      ${props.items.filter((item) => !item.isCompleted).length} items left
    </div>
    <div class="menu__control">
      <button class="control-all" onClick=${() => {
        props.onChangeCurrentFilter("all");
      }}>All</button>
      <button class="control-active" onClick=${() => {
        props.onChangeCurrentFilter("active");
      }}>Active</button>
      <button class="control-completed" onClick=${() => {
        props.onChangeCurrentFilter("completed");
      }}>Completed</button>
    </div>
    <div class="menu-clear">Clear completed</button>
  </div>`;
}

import { html } from "./utils.js";

export function Toolbar(props) {
  let toolbarClass = "todo-list__menu";

  let filterAllClass = "control-all";
  let filterActiveClass = "control-active";
  let filterCompletedClass = "control-completed";

  let clearButtonClass = "menu-clear";

  if (props.items.length === 0) {
    toolbarClass += " todo-list__menu--hiding";
  }

  if (props.currentFilter === "all") {
    filterActiveClass += " control-button--inactive";
    filterCompletedClass += " control-button--inactive";
  } else if (props.currentFilter === "active") {
    filterAllClass += " control-button--inactive";
    filterCompletedClass += " control-button--inactive";
  } else {
    filterAllClass += " control-button--inactive";
    filterActiveClass += " control-button--inactive";
  }

  if (!props.items.some((item) => item.isCompleted)) {
    clearButtonClass += " menu-clear--hiding";
  }

  return html` <div class=${toolbarClass}>
    <div class="menu__count">
      ${props.items.filter((item) => !item.isCompleted).length} items left
    </div>
    <div class="menu__control">
      <button class=${filterAllClass} onClick=${() => {
    props.onChangeCurrentFilter("all");
  }}>All</button>
      <button class=${filterActiveClass} onClick=${() => {
    props.onChangeCurrentFilter("active");
  }}>Active</button>
      <button class=${filterCompletedClass} onClick=${() => {
    props.onChangeCurrentFilter("completed");
  }}>Completed</button>
    </div>
    <div class=${clearButtonClass} onClick=${() => {
    props.onDeleteCheck();
  }}>Clear completed</button>
  </div>`;
}

import { html } from "./utils.js";

export function TodoList(props) {
  return html` <ul class="todo-list">
    ${props.items.map(
      (item) =>
        html`
          <${TodoListItem}
            key=${item.id}
            item=${item}
            currentFilter=${props.currentFilter}
            onDelete=${() => {
              props.onDelete(item.id);
            }}
          />
        `
    )}
  </ul>`;
}

function TodoListItem(props) {
  props.item;
  props.currentFilter;
  let listItemClass = "todo-list__item";
  if (
    (props.currentFilter === "active" && props.item.isCompleted) ||
    (props.currentFilter === "completed" && !props.item.isCompleted)
  ) {
    listItemClass += " todo-list__item--hiding";
  }

  if (props)
    return html` <li class=${listItemClass}>
      <div class="todo-list__item-left">
        <button></button>
        <div>${props.item.text}</div>
        <input type="text" />
      </div>
      <button onClick=${props.onDelete}>X</button>
    </li>`;
}

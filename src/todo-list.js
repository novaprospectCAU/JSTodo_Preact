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
            onCheck=${() => {
              props.onCheck(item.id);
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
  let listItemText = "todo-list__item-text";
  if (
    (props.currentFilter === "active" && props.item.isCompleted) ||
    (props.currentFilter === "completed" && !props.item.isCompleted)
  ) {
    listItemClass += " todo-list__item--hiding";
  }
  if (props.item.isCompleted) {
    listItemText += " todo-list__item-checked";
  }

  if (props)
    return html` <li class=${listItemClass}>
      <div class="todo-list__item-left">
        <button class="todo-list__item-check-button" onClick=${props.onCheck}>
          ${props.item.isCompleted ? "✔️" : ""}
        </button>
        <div class=${listItemText}>${props.item.text}</div>
        <input type="text" />
      </div>
      <button onClick=${props.onDelete}>X</button>
    </li>`;
}

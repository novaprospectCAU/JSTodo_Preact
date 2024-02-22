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
            inputValue=""
            onDelete=${() => {
              props.onDelete(item.id);
            }}
            onCheck=${() => {
              props.onCheck(item.id);
            }}
            onSwitchInputToText=${() => {
              console.log("inputValue: ", inputValue);
              props.onSwitchInputToText(item.id, inputValue);
            }}
            onSwitchTextToInput=${() => {
              props.onSwitchTextToInput(item.id);
            }}
          />
        `
    )}
  </ul>`;
}

function TodoListItem(props) {
  props.item;
  props.currentFilter;
  props.inputValue;
  let listItemClass = "todo-list__item";
  let listItemText = "todo-list__item-text";
  let listItemInputClass = "todo-list__item-input";
  if (
    (props.currentFilter === "active" && props.item.isCompleted) ||
    (props.currentFilter === "completed" && !props.item.isCompleted)
  ) {
    listItemClass += " todo-list__item--hiding";
  }
  if (props.item.isCompleted) {
    listItemText += " todo-list__item-checked";
  }
  if (props.item.isEditing) {
    listItemText += " todo-list--switch";
  } else {
    listItemInputClass += " todo-list--switch";
  }
  if (props)
    return html` <li class=${listItemClass}>
      <div class="todo-list__item-left">
        <button class="todo-list__item-check-button" onClick=${props.onCheck}>
          ${props.item.isCompleted ? "✔️" : ""}
        </button>
        <div class=${listItemText} onDblClick=${props.onSwitchTextToInput}>
          ${props.item.text}
        </div>
        <input
          class=${listItemInputClass}
          type="text"
          onBlur=${(e) => {
            props.inputValue = e.target.value;
            return props.onSwitchInputToText;
          }}
        />
      </div>
      <button class="todo-list__delete-button" onClick=${props.onDelete}>
        X
      </button>
    </li>`;
}

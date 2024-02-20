import { useState } from "https://esm.sh/preact/hooks";
import { html } from "./utils.js";
import { TodoInput } from "./todo-input.js";
import { TodoList } from "./todo-list.js";
import { Toolbar } from "./toolbar.js";

let lastUsedId = 0;

function getNextId() {
  return lastUsedId++;
}

export function App() {
  const [items, setItems] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  console.log(items);

  return html` <div class="main">
    <div class="todo">
      <${TodoInput}
        onAddItem=${(string) => {
          const newItem = {
            id: getNextId(),
            text: string,
            isCompleted: false,
            isEditing: false,
          };
          setItems([newItem, ...items]);
        }}
      />
    </div>
    <${TodoList}
      items=${items}
      currentFilter=${currentFilter}
      onDelete=${(id) => {
        setItems(items.filter((item) => item.id !== id));
      }}
      onCheck=${(id) => {
        setItems(
          items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  isCompleted: !item.isCompleted,
                }
              : item
          )
        );
      }}
    />
    <${Toolbar}
      items=${items}
      currentFilter=${currentFilter}
      onChangeCurrentFilter=${(filter) => {
        setCurrentFilter(() => {
          const newCurrentFilter = filter;
          return newCurrentFilter;
        });
      }}
      onDeleteCheck=${() => {
        setItems(items.filter((item) => !item.isCompleted));
      }}
    />
  </div>`;
}

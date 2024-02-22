import { useState } from "https://esm.sh/preact/hooks";
import { html } from "./utils.js";
import { TodoInput } from "./todo-input.js";
import { TodoList } from "./todo-list.js";
import { Toolbar } from "./toolbar.js";
import { CheckAllButton } from "./check-all.js";

let lastUsedId = 0;

function getNextId() {
  return lastUsedId++;
}

export function App() {
  const [items, setItems] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  return html` <div class="main">
    <div class="todo">
      <${CheckAllButton}
        items=${items}
        onToggleAll=${() => {
          if (items.some((item) => !item.isCompleted)) {
            setItems(
              items.map((item) =>
                item.isCompleted === false
                  ? {
                      ...item,
                      isCompleted: !item.isCompleted,
                    }
                  : item
              )
            );
          } else {
            setItems(
              items.map((item) =>
                item.isCompleted === true
                  ? {
                      ...item,
                      isCompleted: !item.isCompleted,
                    }
                  : item
              )
            );
          }
        }}
      />
      <${TodoInput}
        onAddItem=${(string) => {
          const newItem = {
            id: getNextId(),
            text: string,
            isCompleted: false,
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
      onSwitchInputToText=${(id, string) => {
        setItems(
          items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  text: string,
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
        setCurrentFilter(filter);
      }}
      onDeleteCheck=${() => {
        setItems(items.filter((item) => !item.isCompleted));
      }}
    />
  </div>`;
}

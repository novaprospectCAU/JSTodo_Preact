import { useState } from "https://esm.sh/preact/hooks";
import { html } from "./utils.js";
import { TodoInput } from "./todo-input.js";

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
  </div>`;
}

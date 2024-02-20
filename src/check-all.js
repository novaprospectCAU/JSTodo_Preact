import { html } from "./utils.js";

export function CheckAllButton(props) {
  let checkAllButtonClass = "check-all";
  let isCheckedAll = false;
  if (props.items.length === 0) {
    checkAllButtonClass += " check-all--initial";
  } else if (props.items.some((item) => !item.isCompleted)) {
    checkAllButtonClass += " check-all--off";
    // isCheckedAll = false;
  } else {
    checkAllButtonClass += " check-all--on";
    isCheckedAll = true;
  }
  return html`<button
    type="button"
    class=${checkAllButtonClass}
    onClick=${() => props.onToggleAll(isCheckedAll)}
  >
    ❯
  </button>`;
}

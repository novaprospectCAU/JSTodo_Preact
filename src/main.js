import { h, render } from "https://esm.sh/preact";

import { html } from "./utils.js";

import { App } from "./app.js";

const appElements = document.querySelectorAll(".main");

render(html`<${App} />`, appElements[0]);

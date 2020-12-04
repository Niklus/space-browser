import { app } from "hyperapp";
import state from "./state";
import actions from "./actions";
import view from "./view";

// Stylesheets
import "./styles/w3.css";
import "./styles/index.css";

app(state, actions, view, document.body);

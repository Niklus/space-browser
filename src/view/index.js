import { h } from "hyperapp";
import Header from "./components/Header.js";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Loader from "./components/Loader";
import Snackbar from "./components/Snackbar";

export default (state, actions) => (
  <div oncreate={actions.init}>
    <Header actions={actions} />
    <main>
      {state.route == "" && <Home state={state} actions={actions} />}
      {state.route == "#home" && <Home state={state} actions={actions} />}
      {state.route == "#favs" && <Favorites state={state} actions={actions} />}
    </main>
    <Loader />
    <Snackbar />
  </div>
);

/**
 *  COMPONENT LIFECYCLE
 *  oncreate={element => {}}
 *  onupdate={(element, oldProps) => { }}
 *  onremove={(element, oldProps) => { }}
 */

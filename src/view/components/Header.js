import { h } from "hyperapp";

export default ({ actions }) => (
  <header>
    <div
      class="w3-padding w3-bar w3-black my-header"
      style="display:flex; align-items: center; justify-content: flex-end"
    >
      <h2 style="text-align: center; width: 100%; font-size: 30px">
        Space Browser
      </h2>

      {/*<div class="dot-menu dropdown">
        <label for="dot-menu" class="dot-menu__label dropbtn">
          <span>Menu</span>
        </label>

        <div class="dropdown-content">
          <a href="#" onclick={actions.share}>
            Share
          </a>
          <a href="#" onclick={() => window.location.reload()}>
            Reload
          </a>
        </div>
      </div>
      */}
    </div>
    <nav class="w3-padding w3-center" style="z-index:-1">
      <a class="w3-btn w3-white w3-round w3-border" href="#home">
        Images
      </a>
      <span class="w3-padding" style="font-size:10px;">
        |
      </span>
      <a class="w3-btn w3-white w3-round w3-border" href="#favs">
        Saved
      </a>
    </nav>
  </header>
);

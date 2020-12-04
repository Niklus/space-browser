import { h } from "hyperapp";

export default () => (
  <header>
    <div class="w3-center w3-padding w3-bar w3-black">
      <h1>Space Browser</h1>
    </div>
    <nav class="w3-padding w3-center">
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

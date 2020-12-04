import { h } from "hyperapp";
import Card from "./Card";

export default ({ state, actions }) => {
  let cards;

  if (state.savedImages.length > 0) {
    cards = state.savedImages.map((image) => {
      return <Card image={image} actions={actions} state={state} />;
    });
  }

  return (
    <div>
      <div class="w3-center">
        <h2>
          You have {state.savedImages.length || "no"} saved{" "}
          {state.savedImages.length === 1 ? "image" : "images"}
        </h2>
      </div>
      {cards}
      <div class="w3-panel w3-center">
        <a
          class="w3-btn w3-white w3-round"
          id="backBtn"
          href="#home"
          onclick={() => window.scrollTo(0, 0)}
        >
          Go back to Images
        </a>
      </div>
    </div>
  );
};

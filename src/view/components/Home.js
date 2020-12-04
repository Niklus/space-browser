import { h } from "hyperapp";
import Card from "./Card";

export default ({ state, actions }) => (
  <div>
    <div class="w3-center ">
      <h2>Discover the cosmos!</h2>
    </div>

    {state.images.map((image) => {
      return <Card image={image} actions={actions} state={state} />;
    })}

    <div class="w3-panel w3-center">
      <button
        class="w3-btn w3-white w3-round"
        id="newImagesBtn"
        onclick={() => {
          window.scrollTo(0, 0);
          actions.getImages();
        }}
      >
        Load More Images
      </button>
    </div>
  </div>
);

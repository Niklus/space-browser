import { h } from "hyperapp";

export default ({ image, actions, state }) => (
  <div class="w3-card-4 w3-margin-top w3-round card">
    <img src={image.url} alt={image.title} loading="lazy" />

    <div class="w3-container w3-padding-bottom">
      <h3 class="w3-center">{image.title}</h3>

      <button
        onclick={(e) => actions.toggleExplanation(image.title)}
        class="w3-btn w3-block w3-white w3-center-align w3-round w3-ripple readMore"
      >
        Read More
      </button>
      <div id={image.title} class="w3-container w3-hide explanation">
        <p class="explanation">{image.explanation}</p>
      </div>

      <div class="w3-center">
        <a
          class="w3-btn w3-button w3-ripple w3-white w3-margin-bottom w3-round w3-margin-top myBtn"
          href={image.hdurl}
          target="_blank"
        >
          Download
        </a>
        <span> </span>
        <span>
          {state.route == "#favs" ? (
            <button
              class="w3-btn w3-button w3-ripple w3-white w3-margin-bottom w3-round w3-margin-top myBtn"
              onclick={(e) => actions.deleteImage(image.title)}
            >
              Delete
            </button>
          ) : (
            <button
              class="w3-btn w3-button w3-ripple w3-white w3-margin-bottom w3-round w3-margin-top myBtn"
              onclick={(e) => actions.saveImage(image.title)}
            >
              Save
            </button>
          )}
        </span>
      </div>
    </div>
  </div>
);

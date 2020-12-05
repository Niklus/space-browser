import { storeStateInStorage } from "../utils/storage";
import Http from "../utils/http";
import db from "../utils/db";
import dom from "./dom";

const http = new Http();
const API_KEY = "DEMO_KEY";

export default {
  init: () => (state, actions) => {
    if (state.images.length === 0) {
      actions.getImages();
    }

    actions.getSavedImages();

    window.addEventListener("hashchange", () => {
      actions.changeRoute();
      actions.closeImageExplanation();
    });
  },

  getImages: () => (state, actions) => {
    if (!navigator.onLine) {
      return actions.showSnackbar("You are offline");
    }

    actions.showLoader();

    http.setBaseUrl("https://api.nasa.gov/planetary/apod");
    try {
      http.get(`?api_key=${API_KEY}&hd=true&count=12`).then((images) => {
        actions.updateState({ images });
        actions.saveState();
        actions.closeImageExplanation();
        actions.stopLoader();
      });
    } catch (error) {
      console.log("oops", error);
      actions.stopLoader();
      actions.showSnackbar("Error Detected");
    }
  },

  saveImage: (title) => (state, actions) => {
    const image = state.images.find((image) => {
      return image.title === title;
    });

    db.transaction("rw", db.images, () => {
      db.images.put(image);
    })
      .then(() => {
        actions.showSnackbar("Image Saved");
        actions.getSavedImages();
      })
      .catch(function (err) {
        console.error(err.stack);
      });
  },

  deleteImage: (title) => (state, actions) => {
    const sure = confirm("Delete Image: Are You Sure ?");

    if (sure) {
      db.transaction("rw", db.images, () => {
        db.images.where("title").equals(title).delete();
      })
        .then(() => {
          actions.showSnackbar("Image Deleted");
          actions.getSavedImages();
        })
        .catch(function (err) {
          console.error(err.stack);
        });
    }
  },

  getSavedImages: () => (state, actions) => {
    console.log("Getting saved images");
    db.transaction("r", db.images, () => {
      db.images.toArray((images) => {
        actions.updateState({
          savedImages: images,
        });
      });
    }).catch((err) => {
      console.error(err.stack);
    });
  },

  share: () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Space Browser",
          text: "Check out this app",
          url: "https://space-browser.netlify.app/",
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      window.open(
        "https://twitter.com/intent/tweet?text=https://space-browser.netlify.app/",
        "_blank"
      );
    }
  },

  updateState: (data) => () => data,

  changeRoute: () => ({ route: window.location.hash }),

  saveState: () => (state) => {
    storeStateInStorage(state.images);
  },

  toggleExplanation: dom.toggleExplanation,

  showSnackbar: dom.showSnackbar,

  showLoader: dom.showLoader,

  stopLoader: dom.stopLoader,

  closeImageExplanation: dom.closeImageExplanation,
};

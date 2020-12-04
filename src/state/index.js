import { getStateFromStorage } from "../utils/storage";

const state = {
  images: getStateFromStorage() || [], // Save images temporarilly in local storage: to avoid making multiple requests.
  savedImages: [], // Stored in indexedDb: Has more storing capacity than local storage.
  route: window.location.hash,
};

export default state;

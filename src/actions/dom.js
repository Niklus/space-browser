// Dom manipulation actions
export default {
  toggleExplanation: (id) => {
    const el = document.getElementById(id);
    if (el.className.indexOf("w3-show") == -1) {
      el.className += " w3-show";
    } else {
      el.className = el.className.replace(" w3-show", "");
    }
  },

  showSnackbar: (msg) => {
    var el = document.getElementById("snackbar");
    el.className = "show";
    el.textContent = msg;
    setTimeout(() => {
      el.className = el.className.replace("show", "");
    }, 3000);
  },

  showLoader: () => {
    const el = document.querySelector(".loader");
    document.body.style.opacity = 0.5;
    el.classList.remove("w3-hide");
  },

  stopLoader: () => {
    const el = document.querySelector(".loader");
    document.body.style.opacity = 1;
    el.classList.add("w3-hide");
  },

  closeImageExplanation: () => {
    const elements = document.querySelectorAll(".explanation");
    if (elements.length > 0) {
      elements.forEach((element) => {
        element.classList.remove("w3-show");
      });
    }
  },
};

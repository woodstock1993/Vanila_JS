const title = document.querySelector("#title");
const baseColor = ["#2ECC71", "#3498DB", "#9B59B6", "#F5B041"];

const superEventHandler = {
  handleMouseOver: function () {
    title.innerHTML = "The mouse is here!";
    title.style.color = baseColor[0];
  },

  handleMouseOut: function () {
    title.innerHTML = "The mouse is gone!";
    title.style.color = baseColor[1];
  },

  handleResize: function () {
    title.innerHTML = "You just resized!";
    title.style.color = baseColor[2];
  },

  handleRightClick: function () {
    title.innerHTML = "That was a right click!";
    title.style.color = baseColor[3];
  },
};

function init() {
  title.addEventListener("mouseover", superEventHandler.handleMouseOver);

  title.addEventListener("mouseout", superEventHandler.handleMouseOut);

  window.addEventListener("resize", superEventHandler.handleResize);

  window.addEventListener("contextmenu", superEventHandler.handleRightClick);
}

init();

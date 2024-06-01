// mob menu/////
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("open");
  const closeButton = document.getElementById("close-menu");
  const menu = document.getElementById("menu");

  console.log("Page loaded");

  if (openButton) {
    openButton.addEventListener("click", function () {
      console.log("Open button clicked");
      menu.style.display = "block";
    });
  } else {
    console.error("Open button not found");
  }

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      console.log("Close button clicked");
      menu.style.display = "none";
    });
  } else {
    console.error("Close button not found");
  }

  if (menu) {
    console.log("Menu element found");
  } else {
    console.error("Menu element not found");
  }
});
``;

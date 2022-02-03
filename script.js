const accordion = document.querySelectorAll(".item");

accordion.forEach((item) => {
  item.addEventListener("click", () => {
    let getattri = item.getAttribute("aria-expanded");
    getattri == "false"
      ? item.setAttribute("aria-expanded", "true")
      : item.setAttribute("aria-expanded", "false");
  });
});

const showHideAnswer = document.querySelectorAll(".item");

showHideAnswer.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle(".active");
  });
});

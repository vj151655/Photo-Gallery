const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class
    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");

    const category = button.getAttribute("data-category");

    items.forEach(item => {
      if (category === "all" || item.getAttribute("data-category") === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

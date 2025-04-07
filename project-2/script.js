document.getElementById("menu-hamburger").addEventListener("click", () => {
  const lines = document.querySelectorAll(".line");
  lines.forEach((line) => {
    if (line.classList.contains("open")) {
      line.classList.remove("open");
      line.classList.toggle("close");
    } else {
      line.classList.remove("close");
      line.classList.toggle("open");
    }
  });
});

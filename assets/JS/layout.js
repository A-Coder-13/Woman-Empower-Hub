window.addEventListener("DOMContentLoaded", () => {
  Promise.all([fetch("assets/include/header.html"), fetch("assets/include/footer.html")])
    .then((res) => Promise.all(res.map((r) => r.text())))
    .then(([header, footer]) => {
      document.body.insertAdjacentHTML("afterbegin", header);
      document.body.insertAdjacentHTML("beforeend", footer);
    });
});
const current = location.pathname.split("/").pop();
document.querySelectorAll("nav .nav-link").forEach((link) => {
  if (link.getAttribute("href") === current) link.classList.add("active");
});

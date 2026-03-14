// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("open");
      hamburger.classList.toggle("active");
    });

    // Close menu on link click
    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("open");
        hamburger.classList.remove("active");
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("open");

      // Close all
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));

      // Toggle current
      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });

  // Active nav highlight
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-list a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});

// Theme, mobile menu, and the hero diagram captions. No content is rendered here:
// every page works and reads fully without JavaScript.

(function () {
  const root = document.documentElement;

  // Theme toggle
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = root.dataset.theme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = current === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
    });
  });

  // Mobile menu
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Diagram captions: hover previews, click or Enter pins, Escape clears
  document.querySelectorAll("[data-diagram]").forEach((fig) => {
    const cap = fig.querySelector("figcaption");
    const title = cap.querySelector(".cap-title");
    const text = cap.querySelector(".cap-text");
    const items = fig.querySelectorAll("[data-title]");
    let pinned = null;

    const show = (el) => {
      title.textContent = el ? el.dataset.title : cap.dataset.defaultTitle;
      text.textContent = el ? el.dataset.text : cap.dataset.defaultText;
    };
    const pin = (el) => {
      pinned = pinned === el ? null : el;
      items.forEach((i) => {
        i.classList.toggle("is-active", i === pinned);
        i.setAttribute("aria-pressed", String(i === pinned));
      });
      show(pinned);
    };

    items.forEach((el) => {
      el.setAttribute("aria-pressed", "false");
      el.addEventListener("mouseenter", () => show(el));
      el.addEventListener("mouseleave", () => show(pinned));
      el.addEventListener("focus", () => show(el));
      el.addEventListener("blur", () => show(pinned));
      el.addEventListener("click", () => pin(el));
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pin(el); }
        if (e.key === "Escape") { pinned = el; pin(el); el.blur(); }
      });
    });
  });
})();

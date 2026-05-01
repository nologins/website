const logoMarkup = `
  <div class="brand-logo" aria-hidden="true">
    <img class="brand-logo__img" src="./logo-transparent.png" alt="" />
  </div>
`;

document.querySelectorAll("[data-logo]").forEach((slot) => {
  slot.innerHTML = logoMarkup;
});

const revealItems = document.querySelectorAll(".reveal:not(.reveal--visible)");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("reveal--visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -5% 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("reveal--visible"));
}

document.querySelector(".cta-button")?.addEventListener("click", () => {
  window.location.href = "mailto:hello@nologin.foundation";
});

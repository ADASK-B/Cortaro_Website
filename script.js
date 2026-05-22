(() => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Reveal-on-scroll
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form — client-side handler (mailto fallback so the site works on
  // GitHub Pages without a backend)
  const form = document.getElementById("contact-form");
  const note = document.getElementById("form-note");
  if (form && note) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        note.textContent = "Please fill in all fields.";
        note.className = "form-note err";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        note.textContent = "That email doesn't look right.";
        note.className = "form-note err";
        return;
      }

      const subject = encodeURIComponent(`New inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      // TODO: replace with your real address
      window.location.href = `mailto:hello@cortaro.example?subject=${subject}&body=${body}`;

      note.textContent = "Opening your mail app…";
      note.className = "form-note ok";
    });
  }
})();

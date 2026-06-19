/* =========================================================
   SUNNY'S CORNER JAVASCRIPT
   ---------------------------------------------------------
   JavaScript is for behavior. HTML is content. CSS is style.

   This file adds three small features:
   1. reveal sections as you scroll
   2. type/delete words in the hero headline
   3. change the joy message when the button is pressed
   ========================================================= */

// Wait until the HTML is loaded before looking for elements.
document.addEventListener("DOMContentLoaded", () => {
  setupScrollReveal();
  setupHeroTyping();
  setupJoyButton();
});

function setupScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  // If the browser does not support IntersectionObserver, show everything.
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  revealElements.forEach((element) => observer.observe(element));

  // Safety fallback: show content after a moment even if something goes wrong.
  window.setTimeout(() => {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }, 1800);
}

function setupHeroTyping() {
  const typedWord = document.getElementById("hero-type");
  if (!typedWord) return;

  // Change these words to customize the typing effect.
  const words = [
    "happy little place",
    "sunny corner",
    "cozy hideout",
    "slice of the internet",
  ];

  let wordIndex = 0;
  let characterIndex = 0;
  let isDeleting = false;

  function tick() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      characterIndex -= 1;
    } else {
      characterIndex += 1;
    }

    typedWord.textContent = currentWord.slice(0, characterIndex);

    if (!isDeleting && characterIndex === currentWord.length) {
      isDeleting = true;
      window.setTimeout(tick, 1300);
      return;
    }

    if (isDeleting && characterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    window.setTimeout(tick, isDeleting ? 45 : 85);
  }

  tick();
}

function setupJoyButton() {
  const joyButton = document.getElementById("joy-button");
  const messageElement = document.getElementById("joy-msg");
  const countElement = document.getElementById("joy-count");
  const meterElement = document.getElementById("joy-meter");

  if (!joyButton || !messageElement) return;

  // Add/edit messages here. Keep the comma after each line.
  const messages = [
    "You look lovely today, by the way.",
    "Whatever you're worried about, you've got this.",
    "Somewhere, a cat is yawning. Adorable.",
    "Take a deep breath. There you go.",
    "You're doing better than you think.",
    "This is your sign to drink some water.",
    "The sun came up for you today, too.",
    "Be honest, you're kind of great.",
    "A tiny win counts. Celebrate it.",
    "You made it this far. That's something.",
  ];

  let joyCount = 0;

  joyButton.addEventListener("click", () => {
    let nextMessage = messages[Math.floor(Math.random() * messages.length)];

    // Avoid showing the same message twice in a row.
    if (messageElement.textContent === nextMessage) {
      const currentIndex = messages.indexOf(nextMessage);
      nextMessage = messages[(currentIndex + 1) % messages.length];
    }

    messageElement.style.opacity = "0";
    window.setTimeout(() => {
      messageElement.textContent = nextMessage;
      messageElement.style.opacity = "1";
    }, 160);

    joyCount += 1;

    if (countElement) {
      countElement.textContent = joyCount;
    }

    if (meterElement) {
      const meterWidth = Math.min(100, 18 + joyCount * 9);
      meterElement.style.width = `${meterWidth}%`;
    }
  });
}

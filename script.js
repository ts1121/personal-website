document.addEventListener("DOMContentLoaded", function () {
  const observed = new Set();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !observed.has(entry.target)) {
        const text = entry.target.getAttribute('data-text');
        new Typed(entry.target, {
          strings: [text],
          typeSpeed: 50,
          showCursor: true,
          cursorChar: '|',
          onComplete: () => {
            entry.target.classList.add('typing-done');
          }
        });
        observed.add(entry.target);
      }
    });
  }, {
    threshold: 0.6
  });

  document.querySelectorAll('.typed').forEach(el => {
    el.textContent = '';  // Ensure clean start
    observer.observe(el);
  });
});

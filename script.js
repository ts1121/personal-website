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
          loop: false
        });

        observed.add(entry.target);
      }
    });
  }, {
    threshold: 0.1 // 🔁 Lowered threshold to trigger earlier
  });

  const allTyped = document.querySelectorAll('.typed');

  allTyped.forEach((el, index) => {
    el.textContent = ''; // Ensure clean start

    // ✅ Type the first section immediately
    if (index === 0) {
      const text = el.getAttribute('data-text');
      new Typed(el, {
        strings: [text],
        typeSpeed: 50,
        showCursor: true,
        cursorChar: '|',
        loop: false
      });
      observed.add(el);
    } else {
      observer.observe(el);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.typed').forEach(el => {
    const text = el.getAttribute('data-text');
    new Typed(el, {
      strings: [text],
      typeSpeed: 50,
      showCursor: true,
      cursorChar: '|',
    });
  });
});


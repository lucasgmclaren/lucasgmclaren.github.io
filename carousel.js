// Photo carousel: arrow buttons, swipe/scroll, keyboard. Videos are muted and pause when off-screen.
document.querySelectorAll('.carousel').forEach(function (c) {
  var track = c.querySelector('.carousel-track');
  var slides = Array.prototype.slice.call(track.children);
  var prev = c.querySelector('[data-dir="-1"]');
  var next = c.querySelector('[data-dir="1"]');
  var count = c.querySelector('.carousel-count');
  var index = 0;

  c.querySelectorAll('video').forEach(function (v) {
    v.muted = true; v.defaultMuted = true; v.volume = 0;
    v.addEventListener('volumechange', function () { if (!v.muted || v.volume) { v.muted = true; v.volume = 0; } });
  });

  function current() { return Math.round(track.scrollLeft / track.clientWidth); }
  function update() {
    index = current();
    count.textContent = (index + 1) + ' / ' + slides.length;
    prev.disabled = index === 0;
    next.disabled = index === slides.length - 1;
    slides.forEach(function (s, i) {
      var v = s.querySelector('video');
      if (!v) return;
      if (i === index) { v.play().catch(function () {}); } else { v.pause(); }
    });
  }
  function go(i) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    track.scrollTo({ left: i * track.clientWidth });
  }
  prev.addEventListener('click', function () { go(current() - 1); });
  next.addEventListener('click', function () { go(current() + 1); });
  track.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(current() - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(current() + 1); }
  });
  var t;
  track.addEventListener('scroll', function () { clearTimeout(t); t = setTimeout(update, 80); });
  window.addEventListener('resize', function () { go(index); });
  update();
});

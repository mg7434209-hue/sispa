/* SİSPA lansman sitesi — etkileşimler */
(function () {
  'use strict';

  /* Yıl */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Kampanya: stok + geri sayım (kaynak: assets/js/config.js) */
  var cfg = (window.SISPA_CONFIG && window.SISPA_CONFIG.campaign) || null;
  if (cfg) {
    var remaining = Math.max(0, cfg.remaining | 0);
    var total = Math.max(1, cfg.total | 0);

    /* i18n çalıştıktan sonra yerleştirilen span'ları doldur */
    document.querySelectorAll('[data-stock-remaining]').forEach(function (el) {
      el.textContent = remaining;
    });
    document.querySelectorAll('[data-stock-total]').forEach(function (el) {
      el.textContent = total;
    });

    /* stok çubuğu: satılan oran dolu gösterilir */
    var bar = document.getElementById('stockBar');
    if (bar) bar.style.width = Math.round(((total - remaining) / total) * 100) + '%';

    /* geri sayım */
    var wrap = document.getElementById('campCountdown');
    var end = Date.parse(cfg.end);
    if (wrap && !isNaN(end)) {
      var dEl = document.getElementById('cdD');
      var hEl = document.getElementById('cdH');
      var mEl = document.getElementById('cdM');
      var sEl = document.getElementById('cdS');
      var endedEl = wrap.querySelector('.cd-ended');
      var boxes = wrap.querySelector('.cd-boxes');
      var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
      var timer = null;

      var tick = function () {
        var diff = end - Date.now();
        if (diff <= 0) {
          if (boxes) boxes.hidden = true;
          var label = wrap.querySelector('.cd-label');
          if (label) label.hidden = true;
          if (endedEl) endedEl.hidden = false;
          if (timer) clearInterval(timer);
          return;
        }
        var s = Math.floor(diff / 1000);
        dEl.textContent = Math.floor(s / 86400);
        hEl.textContent = pad(Math.floor(s % 86400 / 3600));
        mEl.textContent = pad(Math.floor(s % 3600 / 60));
        sEl.textContent = pad(s % 60);
      };
      tick();
      timer = setInterval(tick, 1000);
    }
  }

  /* Mobil menü */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* Sayaç animasyonu */
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var dur = 1400;
    var start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
  }
})();

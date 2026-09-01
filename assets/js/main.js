/* La Cave d'Antoine — static site behaviour.
   Vanilla JS, no build step, no framework. Ported from the former
   components/design-memory-motion.tsx, cave-interactions.tsx and
   site-shell.tsx (React). Same effects, same accessibility behaviour.
   Provenance and attributions: /CREDITS.md */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------
   * Scroll reveal + parallax
   * Native-scroll enhancements. prefers-reduced-motion resolves all text
   * immediately and removes transforms. Off-screen scenes do no frame work.
   * ------------------------------------------------------------------- */
  function initMotion() {
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    var wide = window.matchMedia('(min-width: 768px)');
    var revealed = new WeakSet();
    var dispose = function () {};

    function animate(element, frames, duration, delay) {
      if (!element.animate) return;
      element.animate(frames, { duration: duration, delay: delay || 0, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' });
    }

    function configure() {
      dispose();
      if (reduced.matches) return;

      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || revealed.has(entry.target)) return;
          revealed.add(entry.target);
          revealObserver.unobserve(entry.target);
          if (entry.target.hasAttribute('data-highlight')) {
            animate(entry.target, [{ backgroundSize: '0% 100%' }, { backgroundSize: '100% 100%' }], 600);
          } else if (entry.target.hasAttribute('data-soft-blur')) {
            entry.target.querySelectorAll('.soft-character').forEach(function (letter, index) {
              animate(letter, [
                { opacity: 0, transform: 'translateY(16px)', filter: 'blur(12px)' },
                { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }
              ], 900, index * 25);
            });
          } else {
            entry.target.querySelectorAll('.reveal-line-inner').forEach(function (line, index) {
              animate(line, [
                { opacity: 0, transform: 'translateY(24px)' },
                { opacity: 1, transform: 'translateY(0)' }
              ], 600, index * 60);
            });
          }
        });
      }, { rootMargin: '0px 0px -8% 0px' });

      document.querySelectorAll('[data-reveal], [data-highlight], [data-soft-blur]').forEach(function (element) {
        if (!revealed.has(element)) revealObserver.observe(element);
      });

      var scenes = [];
      if (wide.matches) {
        document.querySelectorAll('[data-depth-scene]').forEach(function (scene) {
          scenes.push({
            scene: scene,
            layers: Array.prototype.slice.call(scene.querySelectorAll('[data-depth]')),
            zoom: scene.querySelector('[data-scroll-zoom]')
          });
        });
      }

      var active = new Set();
      var frame = 0;

      function update() {
        frame = 0;
        scenes.forEach(function (entry) {
          if (!active.has(entry.scene)) return;
          var rect = entry.scene.getBoundingClientRect();
          var progress = Math.max(-1, Math.min(1, (window.innerHeight / 2 - rect.top - rect.height / 2) / ((window.innerHeight + rect.height) / 2)));
          entry.layers.forEach(function (element) {
            var depth = Number(element.getAttribute('data-depth')) || 0;
            element.style.setProperty('--depth-y', (progress * depth).toFixed(2) + 'px');
          });
          if (entry.zoom) {
            entry.zoom.style.setProperty('--image-scale', String(1.06 - Math.max(0, Math.min(1, (progress + 1) / 2)) * 0.06));
          }
        });
      }

      function schedule() {
        if (!frame) frame = window.requestAnimationFrame(update);
      }

      var sceneObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) active.add(entry.target);
          else active.delete(entry.target);
        });
        schedule();
      }, { rootMargin: '80px' });
      scenes.forEach(function (entry) { sceneObserver.observe(entry.scene); });

      if (scenes.length) {
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        schedule();
      }

      dispose = function () {
        revealObserver.disconnect();
        sceneObserver.disconnect();
        window.removeEventListener('scroll', schedule);
        window.removeEventListener('resize', schedule);
        window.cancelAnimationFrame(frame);
        scenes.forEach(function (entry) {
          entry.layers.forEach(function (element) { element.style.removeProperty('--depth-y'); });
          if (entry.zoom) entry.zoom.style.removeProperty('--image-scale');
        });
      };
    }

    configure();
    reduced.addEventListener('change', configure);
    wide.addEventListener('change', configure);
  }

  /* ---------------------------------------------------------------------
   * Letter swap nav links: Fancy Components MIT adaptation (see CREDITS.md).
   * Builds the duplicated aria-hidden letter markup from the plain link
   * text, so the animation is pure CSS on hover/focus. If JS fails to run,
   * the plain nav label text still shows and still links correctly.
   * ------------------------------------------------------------------- */
  function initLetterSwap() {
    document.querySelectorAll('[data-letter-swap]').forEach(function (el) {
      var text = el.textContent.trim();
      var inner = document.createElement('span');
      inner.className = 'letter-swap';
      var label = document.createElement('span');
      label.className = 'sr-only';
      label.textContent = text;
      var visual = document.createElement('span');
      visual.className = 'letter-swap-visual';
      visual.setAttribute('aria-hidden', 'true');
      Array.prototype.forEach.call(text, function (letter, index) {
        var ch = letter === ' ' ? ' ' : letter;
        var cell = document.createElement('span');
        cell.className = 'swap-cell';
        cell.style.setProperty('--letter-delay', Math.min(index, 7) * 24 + 'ms');
        var primary = document.createElement('span');
        primary.className = 'swap-primary';
        primary.textContent = ch;
        var secondary = document.createElement('span');
        secondary.className = 'swap-secondary';
        secondary.textContent = ch;
        cell.appendChild(primary);
        cell.appendChild(secondary);
        visual.appendChild(cell);
      });
      inner.appendChild(label);
      inner.appendChild(visual);
      el.textContent = '';
      el.appendChild(inner);
    });
  }

  /* ---------------------------------------------------------------------
   * Native <dialog> helpers: lock page scroll while a dialog is open,
   * close on backdrop click, no extra JS needed for Escape (native).
   * ------------------------------------------------------------------- */
  function wireDialog(dialog) {
    if (!dialog) return;
    dialog.addEventListener('close', function () {
      document.documentElement.classList.remove('dialog-open');
    });
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) dialog.close();
    });
    dialog.querySelectorAll('[data-dialog-close]').forEach(function (button) {
      button.addEventListener('click', function () { dialog.close(); });
    });
  }

  function openDialog(dialog) {
    if (!dialog || dialog.open) return;
    dialog.showModal();
    document.documentElement.classList.add('dialog-open');
  }

  /* ---------------------------------------------------------------------
   * Mobile menu
   * ------------------------------------------------------------------- */
  function initMenu() {
    var toggle = document.getElementById('menu-toggle');
    var dialog = document.getElementById('menu-dialog');
    if (!toggle || !dialog) return;
    wireDialog(dialog);
    toggle.addEventListener('click', function () { openDialog(dialog); });
    dialog.querySelectorAll('nav a').forEach(function (link) {
      link.addEventListener('click', function () { dialog.close(); });
    });
  }

  /* ---------------------------------------------------------------------
   * Photo gallery lightbox (La Cave page)
   * ------------------------------------------------------------------- */
  function initGallery() {
    var dialog = document.getElementById('photo-dialog');
    var buttons = document.querySelectorAll('.photo-button[data-image]');
    if (!dialog || !buttons.length) return;
    wireDialog(dialog);
    var img = dialog.querySelector('img');
    var title = dialog.querySelector('.dialog-title');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        img.src = button.getAttribute('data-image');
        img.alt = button.getAttribute('data-alt') || '';
        title.textContent = button.getAttribute('data-title') || '';
        openDialog(dialog);
      });
    });
  }

  /* ---------------------------------------------------------------------
   * Venue map: disabled at rest, loads Google Maps only on request.
   * ------------------------------------------------------------------- */
  function initMap() {
    var panel = document.querySelector('.map-panel');
    if (!panel) return;
    var placeholder = panel.querySelector('.map-placeholder');
    var showButton = panel.querySelector('[data-map-show]');
    var hideButton = panel.querySelector('[data-map-hide]');
    var iframe = panel.querySelector('iframe');
    var src = iframe.getAttribute('data-src');

    showButton.addEventListener('click', function () {
      iframe.setAttribute('src', src);
      iframe.hidden = false;
      hideButton.hidden = false;
      placeholder.hidden = true;
    });
    hideButton.addEventListener('click', function () {
      iframe.removeAttribute('src');
      iframe.hidden = true;
      hideButton.hidden = true;
      placeholder.hidden = false;
    });
  }

  function initYear() {
    var year = String(new Date().getFullYear());
    document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = year; });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initYear();
    initLetterSwap();
    initMotion();
    initMenu();
    initGallery();
    initMap();
  });
})();

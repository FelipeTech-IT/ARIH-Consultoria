/*
 * ARIH Consultoria — interações da landing page
 * JavaScript puro, sem dependências externas.
 */
(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-nav');
  const year = document.querySelector('#current-year');

  if (year) year.textContent = String(new Date().getFullYear());
  if (!menu || !menuToggle) return;

  function setMenu(open) {
    menu.classList.toggle('is-open', open);
    menuToggle.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('menu-open', open);
  }

  menuToggle.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  document.addEventListener('click', (event) => {
    if (menu.classList.contains('is-open') && header && !header.contains(event.target)) {
      setMenu(false);
    }
  });

  const mediaQuery = window.matchMedia('(min-width: 961px)');
  const handleBreakpoint = (event) => { if (event.matches) setMenu(false); };
  if (mediaQuery.addEventListener) mediaQuery.addEventListener('change', handleBreakpoint);
})();

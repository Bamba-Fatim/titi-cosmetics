// js/main.js

document.addEventListener('DOMContentLoaded', () => {
  /* 1. Hamburger toggle */
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.setAttribute(
      'aria-expanded',
      nav.classList.contains('open')
    );
  });

  /* 2. Hide/show header on scroll */
  const header = document.querySelector('.header');
  let lastScrollY = window.pageYOffset;
  window.addEventListener('scroll', () => {
    const currentY = window.pageYOffset;
    if (currentY > lastScrollY && currentY > 100) {
      header.classList.add('header--hidden');
      header.classList.remove('header--visible');
    } else {
      header.classList.remove('header--hidden');
      header.classList.add('header--visible');
    }
    lastScrollY = currentY;
  });

  /* 3. Back to top button */
  const backBtn = document.createElement('button');
  backBtn.id = 'backToTop';
  backBtn.innerHTML = '↑';
  document.body.appendChild(backBtn);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  });
  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

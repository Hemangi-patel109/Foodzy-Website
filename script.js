const barIcon = document.querySelector('.bar');
const navMenu = document.querySelector('header nav');

barIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

const accountIcon = document.querySelector('.account');
const rightBar = document.querySelector('.right-bar');

accountIcon.addEventListener('click', () => {
  rightBar.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButton = document.getElementById("filter");
  const leftFilter = document.getElementById("left-filter");
  const body = document.body;

  filterButton.addEventListener("click", function () {
    const isVisible = leftFilter.style.display === "block";

    leftFilter.style.display = isVisible ? "none" : "block";

    if (isVisible) {
      body.classList.add("filter-hidden");
    } else {
      body.classList.remove("filter-hidden");
    }
  });
});


const customFaqs = document.querySelectorAll('.custom-faq-item');

customFaqs.forEach(faq => {
  const question = faq.querySelector('.custom-faq-question');
  const arrow = faq.querySelector('.custom-arrow');

  question.addEventListener('click', () => {
    faq.classList.toggle('custom-active');
    const isActive = faq.classList.contains('custom-active');
    arrow.innerHTML = isActive ? '' : '';
  });
});


const navLinks = document.querySelectorAll('.dbs-links .nav-link');
const tabs = document.querySelectorAll('.product-tab');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    navLinks.forEach(nav => nav.classList.remove('green'));
    this.classList.add('green');

    const text = this.textContent.trim().toLowerCase();
    const tabName = text === 'featured' ? 'featured' : text === 'popular' ? 'popular' : 'new';

    tabs.forEach(tab => {
      if (tab.dataset.tab === tabName) {
        tab.style.display = 'flex';
        tab.classList.add('fade-in');
        setTimeout(() => {
          tab.classList.remove('fade-in');
        }, 500);
      } else {
        tab.style.display = 'none';
      }
    });
  });
});

const sliderTrack = document.querySelector('.slider-track');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

arrowRight.addEventListener('click', (e) => {
  e.preventDefault();
  const firstCard = sliderTrack.children[0];
  sliderTrack.appendChild(firstCard);
});

arrowLeft.addEventListener('click', (e) => {
  e.preventDefault();
  const cards = sliderTrack.children;
  const lastCard = cards[cards.length - 1];
  sliderTrack.insertBefore(lastCard, cards[0]);
});
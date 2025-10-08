// Mobile Menu

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Scroll Reveal

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text', { delay: 200, origin: 'top'})
sr.reveal('.form-container form', { delay: 400, origin: 'left'})
sr.reveal('.heading', { delay: 400, origin: 'top'})
sr.reveal('.ride-container .box', { delay: 200, origin: 'top'})
sr.reveal('.services-container .box', { delay: 200, origin: 'top'})
sr.reveal('.about-container', { delay: 200, origin: 'top'})
sr.reveal('.reviews-container', { delay: 200, origin: 'top'})
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom'})
sr.reveal('.footer .box', { delay: 200, origin: 'top'})

// Modal functionality
const modal = document.getElementById('modal');
const cancelModal = document.getElementById('cancelModal');
const form = document.getElementById('leadForm');
const successBox = document.getElementById('successBox');
const skillInput = document.getElementById('skillInput');

function showModal() {
  modal.style.display = 'flex'; // shows overlay
  form.style.display = 'block'; // show form
  successBox.style.display = 'none'; // hide success box
}

function hideModal() {
  modal.style.display = 'none';
}

// Event listeners for opening modal from skill cards
document.querySelectorAll('[data-action="select"]').forEach(btn => {
  btn.addEventListener('click', e => {
    skillInput.value = e.target.getAttribute('data-skill');
    showModal();
  });
});

// Event listener for cancel button
cancelModal.addEventListener('click', hideModal);

// Close modal when clicking outside modal content
modal.addEventListener('click', e => {
  if (e.target === modal) hideModal();
});

// Form submission handling
form.addEventListener('submit', e => {
  e.preventDefault();
  form.style.display = 'none';
  successBox.style.display = 'block';
});


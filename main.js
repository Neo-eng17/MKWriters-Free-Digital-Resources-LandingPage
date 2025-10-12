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
let modal = document.querySelector('.modal');
let modalBtn = document.querySelector('.modal-btn');
let closeModal = document.querySelector('.close-modal');  

modalBtn.onclick = () => {
    modal.style.display = 'block';
}
closeModal.onclick = () => {
    modal.style.display = 'none';
}
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Form validation  
let form = document.querySelector('.form-container form');
form.onsubmit = (event) => {
    event.preventDefault();
    let name = form.querySelector('input[name="name"]').value;
    let email = form.querySelector('input[name="email"]').value;
    let message = form.querySelector('textarea[name="message"]').value;
    if (name && email && message) {
        alert('Form submitted successfully!');
        form.reset();
    }
    else {
        alert('Please fill in all fields.');
    } 
};



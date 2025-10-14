// ===== Mobile Menu (Safe Version) =====
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  if (menu && navbar) {
    menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    window.addEventListener('scroll', () => {
      menu.classList.remove('bx-x');
      navbar.classList.remove('active');
    });
  }
});


// ===== Scroll Reveal Animations =====
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
});

sr.reveal('.text', { delay: 200, origin: 'top' });
sr.reveal('.form-container form', { delay: 400, origin: 'left' });
sr.reveal('.heading', { delay: 400, origin: 'top' });
sr.reveal('.ride-container .box', { delay: 200, origin: 'top' });
sr.reveal('.services-container .box', { delay: 200, origin: 'top' });
sr.reveal('.about-container', { delay: 200, origin: 'top' });
sr.reveal('.reviews-container', { delay: 200, origin: 'top' });
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom' });
sr.reveal('.footer .box', { delay: 200, origin: 'top' });

// ===== Modal + Lead Form Functionality (EmailJS Version) =====
document.addEventListener("DOMContentLoaded", () => {
  // ✅ Initialize EmailJS
  emailjs.init("_0eZp1hDuK5hhUGB9"); // Your Public Key

  // Elements
  const modalOverlay = document.getElementById("modal");
  const skillInput = document.getElementById("skillInput");
  const cancelModal = document.getElementById("cancelModal");
  const leadForm = document.getElementById("leadForm");
  const successBox = document.getElementById("successBox");

  // === Show modal when "Claim Free eBook" clicked ===
  document.querySelectorAll(".btn[data-action='select']").forEach(btn => {
    btn.addEventListener("click", () => {
      const skill = btn.dataset.skill;
      skillInput.value = skill;
      modalOverlay.classList.add("active");
      leadForm.style.display = "block";
      successBox.style.display = "none";
    });
  });

  // === Close modal on Cancel or background click ===
  cancelModal.addEventListener("click", () => modalOverlay.classList.remove("active"));
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove("active");
  });

  // === Handle Form Submission (EmailJS) ===
  leadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const ebook = skillInput.value.trim();

    if (!name || !email) {
      alert("Please fill in your name and email.");
      return;
    }

    // Optional placeholder links (replace later with your real eBook URLs)
    const ebookLinks = {
      "Digital Marketing": "https://example.com/digital-marketing.pdf",
      "Web Development": "https://example.com/web-development.pdf",
      "Graphic Design": "https://example.com/graphic-design.pdf",
      "Academic Writing": "https://example.com/academic-writing.pdf"
    };

    const ebook_link = ebookLinks[ebook] || ebookLinks["Digital Marketing"];

    try {
      // ✅ Send email via EmailJS
      const result = await emailjs.send("service_1mxwm31", "template_6hujzum", {
        name: name,
        email: email,
        ebook: ebook,
        ebook_link: ebook_link
      });

      console.log("EmailJS response:", result);
      leadForm.style.display = "none";
      successBox.style.display = "block";

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Network or EmailJS error. Please try again.");
    }
  });
});
// ===== End of File =====

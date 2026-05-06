// Slideshow
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');
const photos = ['images/photo.jpg', 'images/photo2.jpg'];
let current  = 0;
let timer;

function goToSlide(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = n;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
  resetTimer();
}

function nextSlide() {
  goToSlide((current + 1) % slides.length);
}

function resetTimer() {
  clearInterval(timer);
  if (slides.length > 1) timer = setInterval(nextSlide, 5000);
}

if (slides.length > 1) resetTimer();

// Lightbox — shows current slide's photo
function openLightbox() {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  if (!lb) return;
  lbImg.src = photos[current];
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Prevent closing when clicking the image itself
const lbImg = document.querySelector('.lightbox-img');
if (lbImg) lbImg.addEventListener('click', (e) => e.stopPropagation());


function toggleNav() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// Close nav when a link is tapped
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Close nav when tapping outside
document.addEventListener('click', (e) => {
  const nav = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  if (nav && nav.classList.contains('open') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
  }
});

// Contact form — opens email app with pre-filled message
function handleSend() {
  const nameEl    = document.getElementById('name');
  const emailEl   = document.getElementById('email');
  const messageEl = document.getElementById('message');
  const errorEl   = document.getElementById('form-error');

  if (!nameEl || !emailEl || !messageEl) return;

  const name    = nameEl.value.trim();
  const email   = emailEl.value.trim();
  const message = messageEl.value.trim();

  if (!name || !email || !message) {
    errorEl.style.display = 'block';
    setTimeout(() => errorEl.style.display = 'none', 3000);
    return;
  }

  errorEl.style.display = 'none';

  // Build mailto link — replace the address below with your actual email
  const to      = 'humphreygerat@gmail.com';
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body    = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

  // Clear fields after a short delay
  setTimeout(() => {
    nameEl.value    = '';
    emailEl.value   = '';
    messageEl.value = '';
  }, 500);
}

// Scroll-based fade-in for cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item, .port-card, .qnav-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
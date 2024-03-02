const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    lightbox.style.opacity = 1;
    lightbox.style.visibility = 'visible';
    lightbox.innerHTML = `
      <img src="${item.dataset.src}" alt="${item.alt}">
      <a href="#" class="close-lightbox">X</a>
    `;
  });
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-lightbox') || e.target === lightbox) {
    lightbox.style.opacity = 0;
    lightbox.style.visibility = 'hidden';
  }
});
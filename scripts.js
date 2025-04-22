document.querySelectorAll('.section-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
});
window.onscroll = () => {
  const btn = document.getElementById('back-to-top');
  btn.style.display = window.scrollY > 200 ? 'block' : 'none';
};
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

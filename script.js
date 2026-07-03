document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu');
const nav = document.querySelector('header nav');
menu?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute'; nav.style.right = '5vw'; nav.style.top = '78px';
  nav.style.flexDirection = 'column'; nav.style.background = 'rgba(0,0,0,.92)';
  nav.style.padding = '18px'; nav.style.border = '1px solid rgba(255,79,175,.45)'; nav.style.borderRadius = '18px';
});

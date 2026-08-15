window.NTT_BUILD_INFO = Object.freeze({
  version: '0.1.0',
  buildStamp: 'local',
  shortSha: 'dev'
});

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('#main-nav');
  if (!nav || nav.querySelector('a[href="study-pack.html"]')) return;

  const link = document.createElement('a');
  link.href = 'study-pack.html';
  link.textContent = 'Τράπεζα';
  if (window.location.pathname.endsWith('/study-pack.html') || window.location.pathname.endsWith('study-pack.html')) {
    link.classList.add('active');
  }
  nav.append(link);
});

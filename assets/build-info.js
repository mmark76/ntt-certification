window.NTT_BUILD_INFO = Object.freeze({
  version: '0.1.0',
  buildStamp: 'local',
  shortSha: 'dev'
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.pilot-notice').forEach((notice) => notice.remove());

  document.querySelectorAll('.eyebrow').forEach((eyebrow) => {
    eyebrow.textContent = eyebrow.textContent
      .replace(' · Pilot · ', ' · ')
      .replace(' · Pilot', '');
  });

  document.querySelectorAll('.cta-card h2').forEach((heading) => {
    if (heading.textContent.includes('πρώτη πιλοτική ενότητα')) {
      heading.textContent = heading.textContent.replace(
        'πρώτη πιλοτική ενότητα',
        'πρώτη διαθέσιμη ενότητα'
      );
    }
  });

  const nav = document.querySelector('#main-nav');
  if (!nav) return;

  const ensureLink = (href, text, beforeHref = null) => {
    let link = nav.querySelector(`a[href="${href}"]`);
    if (link) return link;

    link = document.createElement('a');
    link.href = href;
    link.textContent = text;

    const before = beforeHref
      ? nav.querySelector(`a[href="${beforeHref}"]`)
      : null;
    if (before) nav.insertBefore(link, before);
    else nav.append(link);

    return link;
  };

  ensureLink('content.html', 'Περιεχόμενο', 'curriculum.html');
  ensureLink('study-pack.html', 'Τράπεζα');

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const activeLink = nav.querySelector(`a[href="${currentPage}"]`);
  if (activeLink) {
    nav.querySelectorAll('a').forEach((item) => item.classList.remove('active'));
    activeLink.classList.add('active');
  }
});

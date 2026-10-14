const menu = document.querySelector('#mobile-menu');
const opener = document.querySelector('.menu-toggle');
const closer = document.querySelector('.menu-close');
let closeTimer;
let language = 'pl';

function applyLanguage(next) {
  language = next === 'en' ? 'en' : 'pl';
  document.querySelectorAll('[data-pl][data-en]').forEach(element => {
    if (element.tagName === 'H1' && element.closest('.hero')) {
      const parts = language === 'pl'
        ? ['Zobacz, ile ', 'zostaje.', ' Do kolejnego wpływu.']
        : ['See what’s ', 'left.', ' Until your next income.'];
      element.replaceChildren(document.createTextNode(parts[0]));
      const emphasis = document.createElement('em');
      emphasis.textContent = parts[1];
      element.append(emphasis, document.createTextNode(parts[2]));
    } else {
      element.textContent = element.dataset[language];
    }
  });
  document.documentElement.lang = language;
  document.title = location.pathname.startsWith('/projekt')
    ? (language === 'pl' ? 'Zostaje — cele i hipotezy projektu' : 'Zostaje — project goals and hypotheses')
    : (language === 'pl' ? 'Zostaje — zobacz, ile zostaje' : 'Zostaje — see what’s left');
  document.querySelectorAll('.current-language').forEach(el => { el.textContent = language.toUpperCase(); });
  document.querySelector('.skip-link').textContent = language === 'pl' ? 'Przejdź do treści' : 'Skip to content';
  opener.setAttribute('aria-label', language === 'pl' ? 'Otwórz menu' : 'Open menu');
  closer.setAttribute('aria-label', language === 'pl' ? 'Zamknij menu' : 'Close menu');
  document.querySelectorAll('.language-menu').forEach(el => el.removeAttribute('open'));
  const description = location.pathname.startsWith('/projekt')
    ? (language === 'pl' ? 'Cele projektu licencjackiego Zostaje, zakres MVP i hipotezy do zbadania. Nie są to wyniki badań.' : 'Zostaje thesis project goals, MVP scope and hypotheses to test. These are not research findings.')
    : language === 'pl'
    ? 'Plan do kolejnego wpływu, rachunki i cel oszczędnościowy. Zostaje to rozwijana aplikacja iOS do świadomego planowania pieniędzy.'
    : 'A plan until your next income, bills and a savings goal. Zostaje is an iOS app in development for informed money planning.';
  document.querySelector('meta[name="description"]').content = description;
  document.querySelectorAll('meta[property="og:description"], meta[name="twitter:description"]').forEach(el => { el.content = description; });
  document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach(el => { el.content = document.title; });
  document.querySelector('meta[property="og:locale"]').content = language === 'pl' ? 'pl_PL' : 'en_US';
  const visual = document.querySelector('.hero-visual');
  if (visual) visual.setAttribute('aria-label', language === 'pl'
    ? 'Przykład: saldo 5000 zł, rachunki 2400 zł, bufor i cel 800 zł, pozostaje 1800 zł'
    : 'Example: balance 5,000 zł, bills 2,400 zł, buffer and goal 800 zł, remaining 1,800 zł');
  try { localStorage.setItem('zostaje-language', language); } catch { /* Optional preference. */ }
}

function openMenu() {
  clearTimeout(closeTimer);
  menu.hidden = false;
  requestAnimationFrame(() => menu.classList.add('is-open'));
  document.body.classList.add('menu-open');
  opener.setAttribute('aria-expanded', 'true');
  closer.focus();
}
function closeMenu(returnFocus = true) {
  menu.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  opener.setAttribute('aria-expanded', 'false');
  if (returnFocus) opener.focus();
  closeTimer = setTimeout(() => { menu.hidden = true; }, 180);
}
opener.addEventListener('click', openMenu);
closer.addEventListener('click', () => closeMenu());
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu(false)));
document.addEventListener('keydown', event => {
  if (menu.hidden) return;
  if (event.key === 'Escape') closeMenu();
  if (event.key === 'Tab') {
    const controls = [...menu.querySelectorAll('a, button')];
    const first = controls[0], last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
try { language = localStorage.getItem('zostaje-language') || 'pl'; } catch { /* Default Polish. */ }
applyLanguage(language);
const header = document.querySelector('.site-header');
function updateHeader() { header.classList.toggle('is-scrolled', window.scrollY > 12); }
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

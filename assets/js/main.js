// Mobil menyu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', e => { if (e.target.closest('a')) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); } });
}

// Tarif tugmasi bosilganda formadagi xizmatni tanlash
document.querySelectorAll('[data-package]').forEach(a => a.addEventListener('click', () => {
  try { sessionStorage.setItem('abr-package', 'Tarif: ' + a.dataset.package); } catch (e) {}
}));
const form = document.getElementById('request-form');
if (form) {
  try {
    const pkg = sessionStorage.getItem('abr-package');
    if (pkg) { form.service.value = pkg; sessionStorage.removeItem('abr-package'); }
  } catch (e) {}
  // So'rovni pochta orqali yuborish (statik sayt, server kerak emas)
  form.addEventListener('submit', e => {
    e.preventDefault();
    const f = form.elements;
    const body = [
      'Ism: ' + f.name.value,
      'Telefon: ' + f.phone.value,
      'Kompaniya: ' + f.company.value,
      'Xizmat: ' + f.service.value,
      '', f.message.value
    ].join('\n');
    location.href = 'mailto:' + form.dataset.email + '?subject=' + encodeURIComponent('Saytdan so\'rov: ' + (f.service.value || 'maslahat')) + '&body=' + encodeURIComponent(body);
  });
}

// Yangiliklarni turkum bo'yicha saralash
document.querySelectorAll('.chip[data-filter]').forEach(chip => chip.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('is-active', c === chip));
  document.querySelectorAll('#post-list [data-category]').forEach(el => {
    el.hidden = chip.dataset.filter && el.dataset.category !== chip.dataset.filter;
  });
}));

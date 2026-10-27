// NAV HAMBURGER
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// COTIZAR DESDE TARJETA DE SERVICIO
function cotizar(servicio) {
  const msg = encodeURIComponent('Hola, me interesa cotizar el servicio de ' + servicio + ' con Éter Marketing.');
  window.open('https://wa.me/524771234567?text=' + msg, '_blank');
}

// FORM → WA
function enviarWA(e) {
  e.preventDefault();
  const nombre  = document.getElementById('nombre').value.trim();
  const empresa = document.getElementById('empresa').value.trim();
  const servicio = document.getElementById('servicio').value;
  const mensaje = document.getElementById('mensaje').value.trim();

  let texto = 'Hola, soy ' + nombre;
  if (empresa) texto += ' de ' + empresa;
  texto += '.';
  if (servicio) texto += ' Me interesa el servicio de ' + servicio + '.';
  if (mensaje) texto += ' ' + mensaje;
  texto += ' ¿Me pueden dar más información?';

  const waUrl = 'https://wa.me/524771234567?text=' + encodeURIComponent(texto);
  document.getElementById('waLink').href = waUrl;
  document.getElementById('formContent').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
  // Intentar abrir WA automáticamente
  setTimeout(() => { window.open(waUrl, '_blank'); }, 400);
}

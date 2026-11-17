// Header y footer compartidos para todas las páginas de la maqueta.
(function(){
  const page=document.body.dataset.page;
  const nav=[['index.html','Inicio','inicio'],['tienda.html','Tienda','tienda'],['calculadoras.html','Calculadoras','calc'],
             ['tracking.html','Tracking','tracking'],['contacto.html','Contacto','contacto']];
  const links=nav.map(([h,t,k])=>`<a href="${h}"${k===page?' aria-current="page"':''}>${t}</a>`).join('');
  document.body.insertAdjacentHTML('afterbegin',`
  <header class="nav"><div class="nav-in">
    <a class="brand" href="index.html">PTY <b>Shopping</b></a>
    <nav class="links" aria-label="Principal">${links}</nav>
    <a class="acct" href="cuenta.html"${page==='cuenta'?' aria-current="page"':''}>Mi cuenta</a>
    <button class="menu-btn" aria-label="Abrir menú">☰</button>
  </div></header>`);
  document.body.insertAdjacentHTML('beforeend',`
  <footer><div class="wrap">
    <div class="foot">
      <div><a class="brand" href="index.html" style="font-size:17px;color:var(--text)">PTY <b>Shopping</b></a>
        <p style="margin-top:8px">Compras por internet desde 2008.<br>Compramos por ti y lo traemos a Panamá.</p></div>
      <div><h4>Servicios</h4><a href="calculadoras.html">Calculadoras</a><a href="tracking.html">Rastrear paquete</a><a href="tienda.html">Tienda</a><a href="contacto.html#faq">Preguntas frecuentes</a></div>
      <div><h4>Cuenta</h4><a href="cuenta.html">Iniciar sesión</a><a href="cuenta.html#registro">Casillero gratis</a></div>
      <div><h4>Contacto</h4><p>Bethania, Los Ángeles<br>Calle 63B, casa 28, local 1</p><a href="tel:+5073999876">507 399-9876</a><a href="mailto:info@ptyshopping.com">info@ptyshopping.com</a></div>
    </div>
    <div class="legal">© 2026 PTY Shopping · <a href="https://www.facebook.com/ptyshoppingpa/">Facebook</a> · <a href="https://www.instagram.com/ptyshoppingpa/">Instagram</a></div>
  </div></footer>`);
})();

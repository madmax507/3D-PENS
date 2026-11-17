// Header y footer compartidos para todas las páginas de la maqueta.
(function(){
  const page=document.body.dataset.page;
  const nav=[['index.html','Inicio','inicio'],['tienda.html','Tienda','tienda'],['calculadoras.html','Calculadoras','calc'],
             ['tracking.html','Tracking','tracking'],['contacto.html','Contacto','contacto']];
  const links=nav.map(([h,t,k])=>`<a href="${h}"${k===page?' aria-current="page"':''}>${t}</a>`).join('');
  document.body.insertAdjacentHTML('afterbegin',`
  <a class="skip" href="#main">Saltar al contenido</a>
  <header class="nav"><div class="nav-in">
    <a class="brand" href="index.html" translate="no" aria-label="PTY Shopping, inicio"><span class="pty">PTY</span><span class="shop">Shopping</span></a>
    <nav class="links" aria-label="Principal">${links}</nav>
    <a class="acct" href="cuenta.html"${page==='cuenta'?' aria-current="page"':''}>Mi casillero</a>
    <button class="menu-btn" type="button" aria-label="Abrir menú">☰</button>
  </div></header>`);
  document.body.insertAdjacentHTML('beforeend',`
  <footer><div class="wrap">
    <div class="foot">
      <div><a class="brand" href="index.html" translate="no"><span class="pty">PTY</span><span class="shop">Shopping</span></a>
        <p style="margin-top:14px;max-width:24em">Compramos por ti en cualquier tienda del mundo y lo traemos a Panamá. Desde 2008.</p></div>
      <div><h4>Servicios</h4><a href="calculadoras.html">Calculadoras</a><a href="tracking.html">Rastrear paquete</a><a href="tienda.html">Tienda</a><a href="contacto.html#faq">Preguntas frecuentes</a></div>
      <div><h4>Tu cuenta</h4><a href="cuenta.html">Iniciar sesión</a><a href="cuenta.html#registro">Casillero gratis</a></div>
      <div><h4>Oficina</h4><p>Bethania, Los Ángeles<br>Calle 63B, casa 28, local 1</p><a href="tel:+5073999876">507 399-9876</a><a href="mailto:info@ptyshopping.com">info@ptyshopping.com</a></div>
    </div>
    <div class="legal"><span>© 2026 PTY Shopping</span><a href="https://www.facebook.com/ptyshoppingpa/">Facebook</a><a href="https://www.instagram.com/ptyshoppingpa/">Instagram</a></div>
  </div></footer>`);
  // Código de barras decorativo, generado a partir del texto del elemento.
  document.querySelectorAll('[data-barcode]').forEach(el=>{
    const s=el.dataset.barcode;let x=0,bars='';
    for(let i=0;i<s.length*3;i++){const c=s.charCodeAt(i%s.length)+i*7;const w=1+(c%3),g=1+((c>>2)%2);bars+=`<rect x="${x}" width="${w}" height="52"/>`;x+=w+g;}
    el.innerHTML=`<svg viewBox="0 0 ${x} 52" preserveAspectRatio="none" aria-hidden="true" fill="currentColor">${bars}</svg>`;
  });
})();

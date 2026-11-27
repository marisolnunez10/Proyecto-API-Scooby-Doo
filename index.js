function mostrarPersonajes(){
  const div = document.getElementById("resultado")
  div.innerHTML = personajes.map(p => `
    <div class="card" style="border-color: ${p.color}">
      <img src="${p.imagen}" alt="${p.nombreCompleto}">
      <h3 style="color: ${p.color}">${p.nombreCompleto}</h3>
      <p><strong>Edad:</strong> ${p.edad}</p>
      <p><strong>Rol:</strong> ${p.rol}</p>
      <p><strong>Comida:</strong> ${p.comida}</p>
      <p class="frase">"${p.frase}"</p>
    </div>
  `).join("")
}

function mostrarContenido(){
  const div = document.getElementById("resultado")
  div.innerHTML = `
    <h2>Episodios</h2> ${episodios.map(e => `<div class="card-mini"><img src="${e.imagen}" class="foto-card"><strong>${e.titulo}</strong> - ${e.monstruo} (${e.numero}) (${e.año})</div>`).join("")}
   <h2>Cómics</h2> ${comics.map(c => `<div class="card-mini"><img src="${c.imagen}" class="foto-card"><strong>${c.titulo}</strong> (${c.numero}) (${c.año})</div>`).join("")}
   <h2>Películas</h2> ${peliculas.map(p => `<div class="card-mini"><img src="${p.imagen}" class="foto-card"><strong>${p.titulo}</strong> (${p.año})</div>`).join("")}
  `
}
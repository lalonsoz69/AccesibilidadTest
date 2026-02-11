const app = document.getElementById("app");

const routes = {
  home: () => `
    <h2>Bienvenido a AccesibilidadTest</h2>
    <p>Aprende accesibilidad web de forma interactiva y práctica.</p>
    <button onclick="loadRoute('game')">Empezar ahora</button>
  `,
  game: () => startGame(),
  learn: () => `
    <h2>Qué aprenderás</h2>
    <ul>
      <li>Crear webs accesibles para todos</li>
      <li>Detectar errores comunes</li>
      <li>Aplicar normas WCAG en proyectos reales</li>
      <li>Evaluar interfaces digitales</li>
    </ul>
  `,
  benefits: () => `
    <h2>Beneficios</h2>
    <ul>
      <li>Aprendizaje práctico</li>
      <li>Totalmente gratuito</li>
      <li>Compatible con móvil y PC</li>
      <li>Progreso visual y gamificado</li>
    </ul>
  `,
  testimonials: () => `
    <h2>Testimonios</h2>
    <blockquote>“Aprender accesibilidad nunca fue tan divertido.” — Estudiante</blockquote>
    <blockquote>“Ideal para usar en clase.” — Profesor</blockquote>
  `,
  resources: () => `
    <h2>Recursos descargables</h2>
    <p>Guías, plantillas y ejercicios en PDF para seguir aprendiendo.</p>
  `,
  blog: () => `
    <h2>Blog</h2>
    <p>Artículos sobre accesibilidad, buenas prácticas y novedades.</p>
  `,
  about: () => `
    <h2>Sobre mí</h2>
    <p>Soy una apasionada de la accesibilidad digital y la educación web. Con este proyecto quiero que aprender accesibilidad sea práctico y divertido para todos.</p>
  `,
  contact: () => `
    <h2>Contacto</h2>
    <p>¿Quieres colaborar o usar AccesibilidadTest en tu clase? Escríbeme a lalozab@gmail.com</p>
  `
};

// Añadir eventos a los botones
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => loadRoute(btn.dataset.route));
});

function loadRoute(route) {
  if(routes[route]) {
    app.innerHTML = routes[route]();
    app.focus();
  }
}

// Cargar inicio por defecto
loadRoute("home");

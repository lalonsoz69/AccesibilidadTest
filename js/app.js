const app = document.getElementById("app");

const routes = {
  home: () => `
  <h2>Aprende accesibilidad web jugando</h2>
  <p>
    AccesibilidadTest es una plataforma educativa interactiva donde aprendes
    las normas de accesibilidad web mediante retos reales y prácticos.
  </p>
  <button onclick="loadRoute('game')">Empezar ahora</button>
`
,
  game: () => startGame(),
  progress: () => `<h2>Tu progreso</h2>`,
  teacher: () => `<h2>Panel profesor</h2>`
};

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => loadRoute(btn.dataset.route));
});

function loadRoute(route) {
  app.innerHTML = routes[route]();
  app.focus();
}

loadRoute("home");


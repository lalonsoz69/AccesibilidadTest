const app = document.getElementById("app");

const routes = {
  home: () => `<h2>Bienvenido a AccessQuest</h2><p>Aprende accesibilidad jugando.</p>`,
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


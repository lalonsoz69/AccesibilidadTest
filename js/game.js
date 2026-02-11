let level = 1;

function startGame() {
  return `
    <h2>Nivel ${level}</h2>
    <p>¿Este texto tiene contraste suficiente para ser accesible?</p>
    <div style="color:#aaa;background:#fff;padding:1rem">
      Texto de ejemplo
    </div>
    <button onclick="answer(false)">No es accesible</button>
    <button onclick="answer(true)">Sí es accesible</button>
  `;
}

function answer(correct) {
  if (correct) {
    level++;
    alert("¡Bien hecho! Pasas al siguiente nivel");
    loadRoute("game");
  } else {
    alert("Revisa el contraste: es demasiado bajo");
  }
}


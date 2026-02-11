function startGame() {
  return `
    <h2>Nivel 1 - Contraste de colores</h2>
    <p>¿Este texto tiene suficiente contraste?</p>
    <button onclick="answer(true)">Sí</button>
    <button onclick="answer(false)">No</button>
  `;
}

function answer(correct) {
  alert(correct ? "¡Correcto!" : "Intenta otra vez");
}


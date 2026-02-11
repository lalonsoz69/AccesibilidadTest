let level = db.get('level') || 1; // Carga progreso guardado
const maxLevel = 5;

function startGame() {
  let content = '';
  switch(level) {
    case 1:
      content = `
        <h2>Nivel 1 - Contraste de colores</h2>
        <p>¿Un texto gris claro sobre fondo blanco cumple con accesibilidad?</p>
        <button onclick="answer(false)">No, contraste insuficiente</button>
        <button onclick="answer(true)">Sí, está bien</button>
      `;
      break;
    case 2:
      content = `
        <h2>Nivel 2 - Uso de imágenes</h2>
        <p>¿Una imagen informativa sin texto alternativo es accesible?</p>
        <button onclick="answer(false)">No, debe tener alt</button>
        <button onclick="answer(true)">Sí, no hace falta</button>
      `;
      break;
    case 3:
      content = `
        <h2>Nivel 3 - Navegación con teclado</h2>
        <p>Un formulario debe poder completarse usando solo el teclado. ¿Verdadero o falso?</p>
        <button onclick="answer(true)">Verdadero</button>
        <button onclick="answer(false)">Falso</button>
      `;
      break;
    case 4:
      content = `
        <h2>Nivel 4 - Etiquetas de formulario</h2>
        <p>Los campos de formulario deben tener etiquetas claras asociadas. ¿Correcto?</p>
        <button onclick="answer(true)">Correcto</button>
        <button onclick="answer(false)">Incorrecto</button>
      `;
      break;
    case 5:
      content = `
        <h2>Nivel 5 - Videos accesibles</h2>
        <p>Los videos deben incluir subtítulos o transcripción. ¿Es obligatorio para accesibilidad?</p>
        <button onclick="answer(true)">Sí</button>
        <button onclick="answer(false)">No</button>
      `;
      break;
    default:
      content = `
        <h2>¡Felicidades!</h2>
        <p>Has completado los primeros 5 niveles.</p>
        <button onclick="resetGame()">Reiniciar niveles</button>
      `;
  }

  return content;
}

function answer(correct) {
  if(correct) {
    playSound('correct');
    alert("¡Correcto!");
    if(level < maxLevel) level++;
    saveProgress(level);
    loadRoute("game");
  } else {
    playSound('wrong');
    alert("Respuesta incorrecta. Revisa la explicación WCAG.");
    loadRoute("game");
  }
}

function resetGame() {
  level = 1;
  saveProgress(level);
  loadRoute("game");
}

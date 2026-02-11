function showProgress() {
  const userLevel = db.get('level') || 1;
  const maxLevel = 5;

  return `
    <h2>Tu progreso</h2>
    <div class="progress-bar-container">
      <div class="progress-bar" style="width:${(userLevel/maxLevel)*100}%"></div>
    </div>
    <p>Nivel ${userLevel} de ${maxLevel}</p>
  `;
}


function saveScore(user, score) {
  const ranking = db.get('ranking') || [];
  const exists = ranking.find(u => u.name === user);
  if(exists) {
    if(score > exists.score) exists.score = score;
  } else {
    ranking.push({name:user, score});
  }
  db.set('ranking', ranking);
}

function showRanking() {
  const ranking = db.get('ranking') || [];
  ranking.sort((a,b)=>b.score - a.score);

  let html = `<h2>Ranking</h2><ol>`;
  ranking.forEach(u => html += `<li>${u.name} - Nivel ${u.score}</li>`);
  html += `</ol>`;
  app.innerHTML = html;
}


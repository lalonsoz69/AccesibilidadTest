function saveScore(user, score) {
  var ranking = db.get('ranking');
  if(!ranking) ranking = [];
  
  var exists = null;
  for(var i=0;i<ranking.length;i++){
    if(ranking[i].name === user) {
      exists = ranking[i];
      break;
    }
  }

  if(exists) {
    if(score > exists.score) exists.score = score;
  } else {
    ranking.push({name:user, score:score});
  }

  db.set('ranking', ranking);
}

function showRanking() {
  var ranking = db.get('ranking');
  if(!ranking) ranking = [];

  // Orden descendente
  ranking.sort(function(a,b){ return b.score - a.score; });

  var html = "<h2>Ranking</h2><ol>";
  for(var i=0;i<ranking.length;i++){
    html += "<li>" + ranking[i].name + " - Nivel " + ranking[i].score + "</li>";
  }
  html += "</ol>";
  app.innerHTML = html;
}

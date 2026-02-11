function showTeacher() {
  const ranking = db.get('ranking') || [];
  let html = `<h2>Modo profesor - Progreso de alumnos</h2><table border="1" style="width:100%;border-collapse:collapse;">
    <tr><th>Alumno</th><th>Avatar</th><th>Nivel</th></tr>`;
  ranking.forEach(u => {
    const avatar = db.get(`avatar_${u.name}`) || "🧑";
    html += `<tr><td>${u.name}</td><td>${avatar}</td><td>${u.score}</td></tr>`;
  });
  html += `</table>`;
  app.innerHTML = html;
}


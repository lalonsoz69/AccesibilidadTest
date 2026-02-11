const avatars = ["🧑","👩","🧑‍🦱","👨‍🦰","👩‍🦳"];
let selectedAvatar = db.get('avatar') || avatars[0];

function chooseAvatar() {
  let html = `<h2>Elige tu avatar</h2>`;
  avatars.forEach(a => {
    html += `<button onclick="setAvatar('${a}')" style="font-size:2rem;margin:.5rem;">${a}</button>`;
  });
  app.innerHTML = html;
}

function setAvatar(a) {
  selectedAvatar = a;
  db.set('avatar', a);
  alert(`Avatar cambiado a ${a}`);
  loadRoute('home');
}


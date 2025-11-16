  function iniciar(){
    let nome = document.getElementById("username").value;
    localStorage.setItem("nomeUsuario", nome);
  }

  let index = 0;

const playlist = [
    "Music/music1.mp3",
    "Music/music2.mp3",
    "Music/music3.mp3"
];

const player = document.getElementById("bgMusic");
player.src = playlist[index];
player.volume = 0.1;

document.getElementById("playMusic").addEventListener("click", function() {
    player.play();
});

document.getElementById("pauseMusic").addEventListener("click", function() {
    player.pause();
});

document.getElementById("passMusic").addEventListener("click", () => {
    index = (index + 1) % playlist.length;
    player.src = playlist[index];
    player.play();
});
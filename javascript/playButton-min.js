// Obtém os elementos relevantes
const playButton = document.getElementById("play-button");
const audioPlayer = document.getElementById("audio-player");

// Adiciona um evento de clique ao botão de reprodução
playButton.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audioPlayer.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }
});

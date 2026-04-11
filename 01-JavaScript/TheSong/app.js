const encodedSongFiles = [
  "23_minutos_de_m%C3%BAsicas_para_aumentar_sua_Aura_%F0%9F%94%A5(48k).mp3",
  "%40SaiAbhyankkar_-_Aasa_Kooda__Music_Video____Thejo_Bharathwaj___Preity_Mukundhan___Sai_Smriti(48k).mp3",
  "Baller_BGM_Ringtone_Shubh_New_Song_%E2%9D%A4(256k).mp3",
  "Belakina_Kavithe(48k).mp3",
  "Britney_Spears_-_Criminal__Lyrics_(256k).mp3",
  "Ellellu_Oduva_Manase(48k).mp3",
  "Gaatiya_Ilidu(48k).mp3",
  "Hesaru_Poorthi(128k).m4a",
  "Kaakig_Banna_Kaanta(48k).mp3",
  "Katy_Perry_-_Harleys_In_Hawaii__%EF%BD%9E%E2%98%85__%F0%9D%93%BC%F0%9D%93%B5%F0%9D%93%B8%F0%9D%94%80%F0%9D%93%AE%F0%9D%93%AD___%F0%9D%93%BB%F0%9D%93%AE%F0%9D%93%BF%F0%9D%93%AE%F0%9D%93%BB%F0%9D%93%AB_(256k).mp3",
  "Kushalave_Kshemave(48k).mp3",
  "Kushiyagide(48k).mp3",
  "Lady_Gaga%2C_Bruno_Mars_-_Die_With_A_Smile__Lyrics_(256k).mp3",
  "Lyrical__Chammak_Challo___Ra_One___ShahRukh_Khan___Kareena_Kapoor(48k).mp3",
  "Marali_Mareyagi(48k).mp3",
  "Monsoon_Love_Mashup(128k).m4a",
  "Mungaru_Maleyalli_Lyrical_Video___Andondittu_Kaala___Sid_Sriram___Vinay_Rajkumar___Aditi_Prabhudeva(48k).mp3",
  "Nana_Mele_Nanageega(48k).mp3",
  "Nee_Sanihake_Bandare(48k).mp3",
  "new_song_ringtone!_criminal_!_Britney_Spears!_trending!_flute_version(256k).mp3",
  "No_Love(48k).mp3",
  "No_Problem(48k).mp3",
  "Oh_Gulabiye(48k).mp3",
  "Ondonde(256k).mp3",
  "Paravashanadenu(48k).mp3",
  "Power_Video_Songs___Guruvara_Sanje_Video_Song___Puneeth_Rajkumar%2CTrisha_Krishnan(48k).mp3",
  "Sanjit_Hegde_Hit_Songs___Kannada_Hit_Songs___Sanjit_Hegde___Kannada_New_Songs__(48k).mp3",
  "Sapta_Sagaradaache_Ello(48k).mp3",
  "Sariyaagi(48k).mp3",
  "Shree_Hari_Stotram(256k).mp3",
  "Soul_Of_Dia(48k).mp3",
  "Tajaa_Samachara_-_Female(48k).mp3",
  "Vidaamuyarchi_-_Pathikichu_Lyric___Ajith_Kumar___Trisha___Magizh_Thirumeni___Anirudh___Subaskaran(48k).mp3",
  "Yaaro_Kannalli(48k).mp3"
];

const audio = document.getElementById("audioPlayer");
const playlist = document.getElementById("playlist");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const seekBar = document.getElementById("seekBar");
const volumeBar = document.getElementById("volumeBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const currentTitle = document.getElementById("currentTitle");
const currentMeta = document.getElementById("currentMeta");
const statusText = document.getElementById("statusText");

const songs = encodedSongFiles.map((encodedName) => {
  const file = decodeURIComponent(encodedName);
  return {
    file,
    url: `songs/${encodedName}`,
    name: prettifyName(file)
  };
});

let currentIndex = 0;
let isSeeking = false;
audio.volume = Number(volumeBar?.value || 70) / 100;

function prettifyName(fileName) {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/\(\d+k\)/gi, "")
    .replace(/_/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function renderPlaylist() {
  playlist.innerHTML = "";

  songs.forEach((song, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "song";
    item.textContent = song.name;
    item.addEventListener("click", () => loadSong(index, true));
    playlist.appendChild(item);
  });

  highlightActiveSong();
}

function highlightActiveSong() {
  const items = playlist.querySelectorAll(".song");
  items.forEach((el, idx) => el.classList.toggle("active", idx === currentIndex));
}

function updateNowPlaying() {
  const song = songs[currentIndex];
  currentTitle.textContent = song ? song.name : "No song available";
  currentMeta.textContent = song ? song.file.split(".").pop().toUpperCase() : "";
}

function loadSong(index, autoplay = false) {
  if (!songs.length) return;

  currentIndex = (index + songs.length) % songs.length;
  const song = songs[currentIndex];

  audio.src = song.url;
  seekBar.value = "0";
  currentTimeEl.textContent = "0:00";
  durationEl.textContent = "0:00";

  updateNowPlaying();
  highlightActiveSong();

  if (autoplay) {
    playAudio();
  } else {
    statusText.textContent = `Selected: ${song.name}`;
    playPauseBtn.textContent = "Play";
  }
}

function playAudio() {
  audio
    .play()
    .then(() => {
      playPauseBtn.textContent = "Pause";
      statusText.textContent = `Playing: ${songs[currentIndex].name}`;
    })
    .catch(() => {
      statusText.textContent = "Tap Play to start audio";
    });
}

function pauseAudio() {
  audio.pause();
  playPauseBtn.textContent = "Play";
  statusText.textContent = `Paused: ${songs[currentIndex].name}`;
}

playPauseBtn.addEventListener("click", () => {
  if (!songs.length) return;

  if (!audio.src) {
    loadSong(currentIndex, true);
    return;
  }

  if (audio.paused) {
    playAudio();
  } else {
    pauseAudio();
  }
});

prevBtn.addEventListener("click", () => {
  if (!songs.length) return;
  loadSong(currentIndex - 1, true);
});

nextBtn.addEventListener("click", () => {
  if (!songs.length) return;
  loadSong(currentIndex + 1, true);
});

audio.addEventListener("loadedmetadata", () => {
  seekBar.max = Math.floor(audio.duration || 0).toString();
  durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  if (isSeeking) return;
  seekBar.value = Math.floor(audio.currentTime).toString();
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("ended", () => {
  loadSong(currentIndex + 1, true);
});

seekBar.addEventListener("input", () => {
  isSeeking = true;
  currentTimeEl.textContent = formatTime(Number(seekBar.value));
});

seekBar.addEventListener("change", () => {
  audio.currentTime = Number(seekBar.value);
  isSeeking = false;
});

volumeBar?.addEventListener("input", () => {
  audio.volume = Number(volumeBar.value) / 100;
});

if (songs.length) {
  renderPlaylist();
  loadSong(0, false);
} else {
  playlist.innerHTML = "<div class=\"song\">No supported audio files found.</div>";
  statusText.textContent = "Add songs in /songs folder";
}

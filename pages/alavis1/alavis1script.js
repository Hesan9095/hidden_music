// Music data - Tracks for Bozorg, Vol. 2
const tracks = [
  {
    id: 1,
    title: "Riona",
    cover: "../../images/albom/alavis-1.jpg",
    duration: "1:38",
    file: "https://s6.uupload.ir/filelink/ZCVQq1ixM8oe_7f5e575c3f/mehrad_hidden_heen_-_riona_snippet_-_mehrad_hidden_heen_-_soundloadmate.com_kadm.mp3",
  },
  {
    id: 2,
    title: "Ciara",
    cover: "../../images/albom/alavis-1.jpg",
    duration: "1:38",
    file: "https://s6.uupload.ir/filelink/oFrzVNeicg8j_a8a190f5b2/mehrad_hidden_heen_-_ciara_snippet_-_mehrad_hidden_heen_-_soundloadmate.com_vodp.mp3",
  },
];

// Album data for toonel-vol.1
const albums = {
  "alavis1": {
    title: "Alavis 1",
    year: "2021",
    cover: "../../images/albom/alavis-1.jpg",
    description: "ششمین آلبوم رسمی مهراد هیدن",
    tracks: [1, 2],
  },
};

// Player state
let currentTrackIndex = -1; // No track selected initially
let isPlaying = false;
let isDragging = false;
const audio = document.getElementById("audioPlayer");
const musicPlayer = document.getElementById("musicPlayer");

// DOM elements
const playPauseBtn = document.getElementById("playPauseBtn");
const currentTitle = document.getElementById("currentTitle");
const currentCover = document.getElementById("currentCover");
const currentTime = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const progressFill = document.getElementById("progressFill");
const volumeSlider = document.getElementById("volumeSlider");
const progressBar = document.getElementById("progressBar");

function initSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  if (searchInput && searchResults) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (query.length > 0) {
        showSearchResults(query);
      } else {
        hideSearchResults();
      }
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const query = e.target.value.toLowerCase().trim();
        performSearch(query);
      }
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-search")) {
        hideSearchResults();
      }
    });
  }
}

function showSearchResults(query) {
  const searchResults = document.getElementById("searchResults");
  const filteredTracks = tracks
    .filter((track) => track.title.toLowerCase().includes(query))
    .slice(0, 5);

  if (filteredTracks.length > 0) {
    searchResults.innerHTML = filteredTracks
      .map(
        (track) => `
      <div class="search-result-item" onclick="playTrack(${tracks.indexOf(track)}); hideSearchResults();">
        <img src="${track.cover}" alt="${track.title}" class="search-result-thumb">
        <div class="search-result-info">
          <h5>${track.title}</h5>
        </div>
      </div>
    `
      )
      .join("");
    searchResults.style.display = "block";
  } else {
    searchResults.innerHTML = '<div class="search-result-item"><p>نتیجه‌ای یافت نشد</p></div>';
    searchResults.style.display = "block";
  }
}

function hideSearchResults() {
  const searchResults = document.getElementById("searchResults");
  if (searchResults) {
    searchResults.style.display = "none";
  }
}

function performSearch(query) {
  const allTracksSection = document.getElementById("album-tracks");
  if (allTracksSection) {
    allTracksSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => filterTracks(query), 500);
  }
  hideSearchResults();
}

function filterTracks(query) {
  const allTrackItems = document.querySelectorAll(".album-tracks-list .album-track-item");

  if (!query) {
    allTrackItems.forEach((item) => (item.style.display = "flex"));
    return;
  }

  allTrackItems.forEach((item) => {
    const trackName = item.querySelector(".track-name")?.textContent.toLowerCase() || "";
    if (trackName.includes(query)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function generateAlbumTracksList() {
  const container = document.getElementById("albumTracksList");
  if (!container) return;

  // Extract album ID from the current page URL
  const albumId = window.location.pathname.split("/").pop().replace(".html", "");
  const album = albums[albumId];
  if (!album) return;

  // Filter tracks for the current album
  const albumTracks = tracks.filter((track) => album.tracks.includes(track.id));

  container.innerHTML = albumTracks
    .map(
      (track, index) => `
    <div class="album-track-item" onclick="playTrack(${tracks.indexOf(track)})">
      <div class="track-number">${index + 1}</div>
      <div class="track-info">
        <span class="track-name">${track.title}</span>
      </div>
      <div class="track-duration">${track.duration}</div>
    </div>
  `
    )
    .join("");
}

function initPlayer() {
  generateAlbumTracksList();

  if (audio) {
    audio.addEventListener("loadedmetadata", () => {
      if (durationEl) durationEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      if (!isDragging && audio.duration && progressFill && currentTime) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = progress + "%";
        currentTime.textContent = formatTime(audio.currentTime);
      }
    });

    audio.addEventListener("ended", () => {
      nextTrack();
    });

    if (volumeSlider) {
      volumeSlider.addEventListener("input", () => {
        audio.volume = volumeSlider.value;
      });
    }
  }

  if (progressBar) {
    progressBar.addEventListener("mousedown", startDrag);
    progressBar.addEventListener("click", seekTo);
  }
}

function playTrack(index) {
  if (index < 0 || index >= tracks.length) return;

  currentTrackIndex = index;
  const track = tracks[currentTrackIndex];

  if (audio) {
    audio.src = track.file;
    audio.load();

    updatePlayerUI();

    if (musicPlayer.style.display !== "block") {
      musicPlayer.style.display = "block";
    }

    audio.addEventListener(
      "canplay",
      () => {
        audio
          .play()
          .then(() => {
            isPlaying = true;
            if (playPauseBtn) playPauseBtn.textContent = "⏸";
          })
          .catch((e) => {
            console.log("Auto-play prevented:", e);
          });
      },
      { once: true }
    );
  }
}

function togglePlayPause() {
  if (!audio || currentTrackIndex === -1) return;

  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    if (playPauseBtn) playPauseBtn.textContent = "▶";
  } else {
    audio
      .play()
      .then(() => {
        isPlaying = true;
        if (playPauseBtn) playPauseBtn.textContent = "⏸";
      })
      .catch((e) => {
        console.log("Play failed:", e);
      });
  }
}

function nextTrack() {
  if (currentTrackIndex === -1) return;
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  playTrack(currentTrackIndex);
}

function prevTrack() {
  if (currentTrackIndex === -1) return;
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  playTrack(currentTrackIndex);
}

function seekTo(event) {
  if (!audio || !audio.duration) return;

  const progressBar = event.currentTarget;
  const rect = progressBar.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const width = rect.width;
  const percentage = clickX / width;

  audio.currentTime = percentage * audio.duration;
}

function startDrag(event) {
  if (!audio || !audio.duration) return;
  isDragging = true;
  seekTo(event);

  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", stopDrag);
}

function drag(event) {
  if (isDragging) {
    seekTo({ currentTarget: progressBar, clientX: event.clientX });
  }
}

function stopDrag() {
  isDragging = false;
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("mouseup", stopDrag);
}

function updatePlayerUI() {
  const track = tracks[currentTrackIndex];
  if (track) {
    if (currentTitle) currentTitle.textContent = track.title;
    if (currentCover) {
      currentCover.src = track.cover;
      currentCover.alt = track.title;
    }
    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
      downloadBtn.href = track.file;
      downloadBtn.download = `${track.title}.mp3`;
    }
  }
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function toggleMobileMenu() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  }
}

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".album-track-item");
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  initPlayer();
  initSearch();
});

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "Space":
      e.preventDefault();
      togglePlayPause();
      break;
    case "ArrowRight":
      nextTrack();
      break;
    case "ArrowLeft":
      prevTrack();
      break;
  }
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
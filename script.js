// Music data - 35 tracks across 7 albums
const tracks = [
  {
    id: 1,
    title: "Khodaye Binahayat",
    cover: "/images/new/Khodaye-Binahayat.jpg",
    duration: "3:57",
    file: "https://visit1.navahang.net/media/2025/mp3/07/hq/Mehrad%20Hidden%20-%20Khodaye%20Binahayat.mp3",
  },
  {
    id: 2,
    title: "Heart Shaped Box (Cover)",
    cover: "/images/new/Heart-Shaped-Box.jpg",
    duration: "3:10",
    file: "https://visit1.navahang.net/media/2025/mp3/07/hq/Mehrad%20Hidden%20-%20Heart%20Shaped%20Box%20(Cover).mp3",
  },
  {
    id: 3,
    title: "Sargardoon",
    cover: "/images/new/sargardoon.jpg",
    duration: "3:59",
    file: "https://visit1.navahang.net/media/2025/mp3/05/hq/Mehrad%20Hidden%20&%20Kaviano%20-%20Sargardoon.mp3",
  },
  {
    id: 4,
    title: "Refighe Man",
    cover: "/images/covor/Refighe-Man.jpg",
    duration: "3:31",
    file: "https://visit1.navahang.net/media/2025/mp3/05/hq/Mehrad%20Hidden%20&%20Kaviano%20-%20Refighe%20Man.mp3",
  },
  {
    id: 5,
    title: "Mano Bespar",
    cover: "/images/covor/Mano-Bespar.jpg",
    duration: "4:30",
    file: "https://visit1.navahang.net/media/2025/mp3/02/hq/Mehrad%20Hidden%20&%20Kaviano%20-%20Mano%20Bespar.mp3",
  },
  {
    id: 6,
    title: "Karma",
    cover: "/images/covor/Karma.jpg",
    duration: "3:31",
    file: "/audio/toonel.mp3",
  },
  {
    id: 7,
    title: "Dele-Man",
    cover: "/images/covor/Dele-Man.jpg",
    duration: "3:03",
    file: "/audio/noor.mp3",
  },
  {
    id: 8,
    title: "Boro-Khoone",
    cover: "/images/covor/Boro-Khoone.jpg",
    duration: "6:32",
    file: "/audio/sokoot.mp3",
  },
  {
    id: 9,
    title: "Beham-Rikhte",
    cover: "/images/covor/Beham-Rikhte.jpg",
    duration: "4:44",
    file: "/audio/rah.mp3",
  },
  {
    id: 10,
    title: "Bowrelas",
    cover: "/images/covor/Bowrelas.jpg",
    duration: "3:54",
    file: "/audio/omid.mp3",
  },
  {
    id: 11,
    title: "Mama",
    cover: "/images/covor/Mama.jpg",
    duration: "3:39",
    file: "/audio/sefr.mp3",
  },
  {
    id: 12,
    title: "Khodafez",
    cover: "/images/covor/Khodafez.jpg",
    duration: "3:47",
    file: "/audio/shoroo.mp3",
  },
  {
    id: 13,
    title: "Moji",
    cover: "/images/covor/Moji.jpg",
    duration: "4:17",
    file: "/audio/payan.mp3",
  },
  {
    id: 14,
    title: "خاطرات من",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    duration: "4:05",
    file: "/audio/khaterate-man.mp3",
  },
  {
    id: 15,
    title: "بی‌تو",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    duration: "3:52",
    file: "/audio/bi-to.mp3",
  },
  {
    id: 16,
    title: "سلاخ",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    duration: "4:11",
    file: "/audio/salakh.mp3",
  },
  {
    id: 17,
    title: "خون",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    duration: "3:29",
    file: "/audio/khoon.mp3",
  },
  {
    id: 18,
    title: "جنگ",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    duration: "4:44",
    file: "/audio/jang.mp3",
  },
  {
    id: 19,
    title: "صلح",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    duration: "3:17",
    file: "/audio/solh.mp3",
  },
  {
    id: 20,
    title: "تونل دوم",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    duration: "4:26",
    file: "/audio/toonel-dovom.mp3",
  },
  {
    id: 21,
    title: "عمق",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    duration: "3:54",
    file: "/audio/omgh.mp3",
  },
  {
    id: 22,
    title: "تاریکی",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    duration: "4:08",
    file: "/audio/tariki.mp3",
  },
  {
    id: 23,
    title: "روشنایی",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    duration: "3:33",
    file: "/audio/roshanai.mp3",
  },
  {
    id: 24,
    title: "آخرین شب",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    duration: "4:33",
    file: "/audio/akharin-shab.mp3",
  },
  {
    id: 25,
    title: "فردا",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    duration: "3:47",
    file: "/audio/farda.mp3",
  },
  {
    id: 26,
    title: "زوزنقه",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    duration: "4:19",
    file: "/audio/zoozanaghe.mp3",
  },
  {
    id: 27,
    title: "شکل",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    duration: "3:41",
    file: "/audio/shakl.mp3",
  },
  {
    id: 28,
    title: "هندسه",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    duration: "4:02",
    file: "/audio/handase.mp3",
  },
  {
    id: 29,
    title: "خط",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    duration: "3:25",
    file: "/audio/khat.mp3",
  },
  {
    id: 30,
    title: "نقطه",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    duration: "4:14",
    file: "/audio/noghte.mp3",
  },
  {
    id: 31,
    title: "پیتزا",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    duration: "3:58",
    file: "/audio/pizza.mp3",
  },
  {
    id: 32,
    title: "پنیر",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    duration: "3:12",
    file: "/audio/panir.mp3",
  },
  {
    id: 33,
    title: "گوجه",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    duration: "4:27",
    file: "/audio/goje.mp3",
  },
  {
    id: 34,
    title: "خمیر",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    duration: "3:36",
    file: "/audio/khamir.mp3",
  },
  {
    id: 35,
    title: "طعم",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    duration: "4:09",
    file: "/audio/taam.mp3",
  },
];

// Album data for separate pages (kept for album pages, but not used in main player)
const albums = {
  "bozorg-vol2": {
    title: "Bozorg, Vol. 2",
    year: "2015",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    description: "اولین آلبوم رسمی مهراد هیدن که شامل ترک‌های محبوب مسافر و شب‌های تهران است.",
    tracks: [1, 2, 3, 4, 5],
  },
  "toonel-vol1": {
    title: "Toonel, Vol. 1",
    year: "2017",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    description: "آلبومی که مفهوم تونل و عبور از تاریکی به نور را بررسی می‌کند.",
    tracks: [6, 7, 8, 9, 10],
  },
  "sefr": {
    title: "Sefr",
    year: "2018",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    description: "آلبومی درباره شروع‌های تازه و بازگشت به نقطه صفر.",
    tracks: [11, 12, 13, 14, 15],
  },
  "esalakh": {
    title: "Salakh",
    year: "2019",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    description: "EP کوتاه و قدرتمند با مضامین اجتماعی و سیاسی.",
    tracks: [16, 17, 18, 19],
  },
  "toonel-vol2": {
    title: "Toonel, Vol. 2",
    year: "2020",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    description: "ادامه سری تونل با عمق بیشتر و پیچیدگی‌های صوتی.",
    tracks: [20, 21, 22, 23, 24, 25],
  },
  "alavis1": {
    title: "Alavis 1",
    year: "2020",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    description: "ادامه سری تونل با عمق بیشتر و پیچیدگی‌های صوتی.",
    tracks: [20, 21, 22, 23, 24, 25],
  },
  "zoozanaghe": {
    title: "Zoozanaghe",
    year: "2022",
    cover: "/mehrad-hidden-second-album-cover-modern.jpg",
    description: "آلبومی با الهام از اشکال هندسی و ساختارهای ریاضی.",
    tracks: [26, 27, 28, 29, 30],
  },
  "alavis2": {
    title: "Alavis 2",
    year: "2024",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    description: "ادامه سری تونل با عمق بیشتر و پیچیدگی‌های صوتی.",
    tracks: [20, 21, 22, 23, 24, 25],
  },
  "pizza": {
    title: "Pizza",
    year: "2024",
    cover: "/mehrad-hidden-album-cover-dark-purple.jpg",
    description: "جدیدترین آلبوم با رویکردی متفاوت و مفاهیم روزمره.",
    tracks: [31, 32, 33, 34, 35],
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
const durationEl = document.getElementById("duration"); // Renamed to avoid conflict with built-in duration
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

    // Hide search results when clicking outside
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
    .slice(0, 5); // Show max 5 results

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
  const allTracksSection = document.getElementById("all-tracks");
  if (allTracksSection) {
    allTracksSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => filterTracks(query), 500);
  }
  hideSearchResults();
}

function filterTracks(query) {
  const allTrackItems = document.querySelectorAll(".all-tracks-list .track-item");

  if (!query) {
    allTrackItems.forEach((item) => (item.style.display = "grid"));
    return;
  }

  allTrackItems.forEach((item) => {
    const trackName = item.querySelector(".track-name")?.textContent.toLowerCase() || "";

    if (trackName.includes(query)) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  });
}

function generateAllTracksList() {
  const container = document.getElementById("allTracksList");
  if (!container) return;

  container.innerHTML = tracks
    .map(
      (track, index) => `
    <div class="track-item" onclick="playTrack(${index})">
      <div class="track-number">${index + 1}</div>
      <div class="track-title">
        <span class="track-name">${track.title}</span>
      </div>
      <div class="track-duration">${track.duration}</div>
    </div>
  `
    )
    .join("");
}

function initPlayer() {
  generateAllTracksList();

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

  // Initialize draggable progress bar
  if (progressBar) {
    progressBar.addEventListener("mousedown", startDrag);
    progressBar.addEventListener("click", seekTo);
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

let isPlayerVisible = false;

function playTrack(index) {
  if (index < 0 || index >= tracks.length) return;

  currentTrackIndex = index;
  const track = tracks[currentTrackIndex];

  if (audio) {
    audio.src = track.file;
    audio.load();

    updatePlayerUI();

    if (!isPlayerVisible) {
      musicPlayer.style.display = "block";
      isPlayerVisible = true;
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
  let percentage = clickX / width;

  // Since direction: ltr, no need to invert for RTL
  audio.currentTime = percentage * audio.duration;
}

function startDrag(event) {
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
  const animatedElements = document.querySelectorAll(".album-card, .popular-track-card, .about-content");
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
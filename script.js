```javascript
// ScreenSnack — movie discovery website

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    emoji: "🌀",
    description: "A skilled thief enters people's dreams to steal secrets."
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    emoji: "🚀",
    description: "Explorers travel beyond Earth searching for a new home."
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    emoji: "🦇",
    description: "Gotham's masked hero faces a dangerous criminal mastermind."
  },
  {
    id: 4,
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: "Comedy",
    emoji: "🏨",
    description: "A hotel concierge becomes caught in a mysterious adventure."
  },
  {
    id: 5,
    title: "La La Land",
    year: 2016,
    genre: "Romance",
    emoji: "🎹",
    description: "Two artists chase their dreams in Los Angeles."
  },
  {
    id: 6,
    title: "Spirited Away",
    year: 2001,
    genre: "Animation",
    emoji: "🐉",
    description: "A young girl discovers a magical world of spirits."
  },
  {
    id: 7,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    emoji: "🕊️",
    description: "An unlikely friendship grows through years of hardship."
  },
  {
    id: 8,
    title: "Knives Out",
    year: 2019,
    genre: "Mystery",
    emoji: "🔎",
    description: "A detective investigates a family's puzzling mystery."
  },
  {
    id: 9,
    title: "Jurassic Park",
    year: 1993,
    genre: "Adventure",
    emoji: "🦖",
    description: "A theme park of recreated dinosaurs becomes dangerous."
  },
  {
    id: 10,
    title: "Finding Nemo",
    year: 2003,
    genre: "Animation",
    emoji: "🐠",
    description: "A clownfish crosses the ocean to find his missing son."
  },
  {
    id: 11,
    title: "The Truman Show",
    year: 1998,
    genre: "Drama",
    emoji: "📺",
    description: "A man begins to question the world around him."
  },
  {
    id: 12,
    title: "Paddington 2",
    year: 2017,
    genre: "Comedy",
    emoji: "🐻",
    description: "A kind bear gets caught up in an unusual mystery."
  },
  {
    id: 13,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genre: "Action",
    emoji: "🕷️",
    description: "A teenager discovers that being a hero means more than one thing."
  },
  {
    id: 14,
    title: "Coco",
    year: 2017,
    genre: "Animation",
    emoji: "🎸",
    description: "A music-loving boy discovers his family's remarkable history."
  },
  {
    id: 15,
    title: "The Martian",
    year: 2015,
    genre: "Sci-Fi",
    emoji: "🪐",
    description: "An astronaut uses science and creativity to survive on Mars."
  },
  {
    id: 16,
    title: "Enola Holmes",
    year: 2020,
    genre: "Mystery",
    emoji: "🕵️",
    description: "A clever young detective searches for clues about her family."
  }
];

// Find the elements in our HTML page.
const movieGrid = document.getElementById("movie-grid");
const searchInput = document.getElementById("search-input");
const genreFilter = document.getElementById("genre-filter");
const randomButton = document.getElementById("random-button");
const favoritesToggle = document.getElementById("favorites-toggle");
const resultsCount = document.getElementById("results-count");
const emptyState = document.getElementById("empty-state");
const clearFiltersButton = document.getElementById("clear-filters");
const movieDialog = document.getElementById("movie-dialog");
const randomResult = document.getElementById("random-result");
const closeDialogButton = document.getElementById("close-dialog");
const anotherPickButton = document.getElementById("another-pick");

// Load saved favorites safely.
function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem("screensnack-favorites"));

    if (Array.isArray(saved)) {
      return saved.filter(
        id => Number.isInteger(id) && movies.some(movie => movie.id === id)
      );
    }
  } catch (error) {
    console.warn("Saved favorites could not be loaded.", error);
  }

  return [];
}

let favorites = loadFavorites();
let showingFavorites = false;

// Escape text before inserting it into HTML.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

// Build the genre dropdown from our movie collection.
function populateGenres() {
  const genres = [...new Set(movies.map(movie => movie.genre))].sort();

  genres.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });
}

// Create the HTML for one movie card.
function createMovieCard(movie) {
  const isFavorite = favorites.includes(movie.id);

  return `
    <article class="movie-card">
      <div class="movie-poster">
        <span class="poster-emoji" aria-hidden="true">
          ${movie.emoji}
        </span>
        <span class="poster-label">SCREENSNACK PICK</span>

        <button
          class="favorite-button ${isFavorite ? "is-favorite" : ""}"
          type="button"
          data-favorite-id="${movie.id}"
          aria-label="${isFavorite ? "Remove" : "Add"} ${escapeHTML(movie.title)} ${isFavorite ? "from" : "to"} favorites"
          aria-pressed="${isFavorite}"
          title="${isFavorite ? "Remove from favorites" : "Add to favorites"}"
        >${isFavorite ? "♥" : "♡"}</button>
      </div>

      <div class="movie-info">
        <div class="movie-meta">
          <span>${movie.year}</span>
          <span class="genre-tag">${escapeHTML(movie.genre)}</span>
        </div>

        <h3>${escapeHTML(movie.title)}</h3>
        <p>${escapeHTML(movie.description)}</p>
      </div>
    </article>
  `;
}

// Filter movies using the search, genre, and favorites controls.
function getFilteredMovies() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedGenre = genreFilter.value;

  return movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm);
    const matchesGenre =
      selectedGenre === "all" || movie.genre === selectedGenre;
    const matchesFavorites =
      !showingFavorites || favorites.includes(movie.id);

    return matchesSearch && matchesGenre && matchesFavorites;
  });
}

// Display all movies that match the current controls.
function renderMovies() {
  const filteredMovies = getFilteredMovies();

  movieGrid.innerHTML = filteredMovies.map(createMovieCard).join("");

  resultsCount.textContent =
    `${filteredMovies.length} ${filteredMovies.length === 1 ? "movie" : "movies"} found`;

  emptyState.hidden = filteredMovies.length !== 0;
  movieGrid.hidden = filteredMovies.length === 0;

  favoritesToggle.setAttribute("aria-pressed", String(showingFavorites));
  favoritesToggle.textContent = showingFavorites
    ? "♥ All movies"
    : "♡ Favorites";
}

// Save favorites in this browser.
function saveFavorites() {
  try {
    localStorage.setItem("screensnack-favorites", JSON.stringify(favorites));
    return true;
  } catch (error) {
    console.warn("Favorites could not be saved.", error);
    return false;
  }
}

// Add or remove a favorite when a heart is clicked.
function toggleFavorite(movieId) {
  if (favorites.includes(movieId)) {
    favorites = favorites.filter(id => id !== movieId);
  } else {
    favorites.push(movieId);
  }

  saveFavorites();
  renderMovies();
}

// Display a random movie suggestion.
function pickRandomMovie() {
  const availableMovies = getFilteredMovies();

  if (availableMovies.length === 0) {
    return;
  }

  const movie =
    availableMovies[Math.floor(Math.random() * availableMovies.length)];

  randomResult.innerHTML = `
    <div class="movie-poster">
      <span class="poster-emoji" aria-hidden="true">
        ${movie.emoji}
      </span>
      <span class="poster-label">YOUR MOVIE NIGHT PICK</span>
    </div>

    <div class="movie-meta">
      <span>${movie.year}</span>
      <span class="genre-tag">${escapeHTML(movie.genre)}</span>
    </div>

    <h3>${escapeHTML(movie.title)}</h3>
    <p>${escapeHTML(movie.description)}</p>
    <button
      class="secondary-button suggestion-favorite"
      type="button"
      data-favorite-id="${movie.id}"
      aria-pressed="${favorites.includes(movie.id)}"
    >${favorites.includes(movie.id) ? "♥ Remove favorite" : "♡ Add favorite"}</button>
  `;

  if (typeof movieDialog.showModal === "function") {
    if (!movieDialog.open) {
      movieDialog.showModal();
    }
  } else {
    alert(`Tonight's pick: ${movie.title} (${movie.year})\n${movie.description}`);
  }
}

// Listen for search and genre changes.
searchInput.addEventListener("input", renderMovies);
genreFilter.addEventListener("change", renderMovies);

// Switch between the complete collection and favorites.
favoritesToggle.addEventListener("click", () => {
  showingFavorites = !showingFavorites;
  renderMovies();

  if (showingFavorites) {
    document.getElementById("favorites").scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  } else {
    document.getElementById("discover").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});

// Handle clicks on favorite buttons in movie cards and suggestions.
document.addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-favorite-id]");

  if (!favoriteButton) {
    return;
  }

  const movieId = Number(favoriteButton.dataset.favoriteId);

  if (movies.some(movie => movie.id === movieId)) {
    toggleFavorite(movieId);

    if (favoriteButton.classList.contains("suggestion-favorite")) {
      const isFavorite = favorites.includes(movieId);
      favoriteButton.textContent = isFavorite
        ? "♥ Remove favorite"
        : "♡ Add favorite";
      favoriteButton.setAttribute("aria-pressed", String(isFavorite));
    }
  }
});

// Pick a movie and allow the user to pick again.
randomButton.addEventListener("click", pickRandomMovie);
anotherPickButton.addEventListener("click", pickRandomMovie);

// Close the suggestion dialog.
closeDialogButton.addEventListener("click", () => {
  movieDialog.close();
});

movieDialog.addEventListener("click", event => {
  if (event.target === movieDialog) {
    movieDialog.close();
  }
});

// Clear search and genre filters if no movies are found.
clearFiltersButton.addEventListener("click", () => {
  searchInput.value = "";
  genreFilter.value = "all";
  showingFavorites = false;
  renderMovies();
});

// Start the website.
populateGenres();
renderMovies();
```

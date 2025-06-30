import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
      } catch (err) {
        setError("Failed to load movie details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleFavoriteClick = () => {
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  if (loading) return <div className="loading">Loading movie details...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!movie) return <div className="error-message">Movie not found</div>;

  const trailer = movie.videos?.results?.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  return (
    <div className="movie-details">
      <div className="movie-details-container">
        <div className="movie-poster-large">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        
        <div className="movie-info-detailed">
          <div className="movie-header">
            <h1>{movie.title}</h1>
            <button
              className={`favorite-btn-large ${
                isFavorite(movie.id) ? "active" : ""
              }`}
              onClick={handleFavoriteClick}
            >
              ♥ {isFavorite(movie.id) ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>

          <div className="movie-meta">
            <span className="release-date">{movie.release_date}</span>
            <span className="runtime">{movie.runtime} min</span>
            <span className="rating">⭐ {movie.vote_average?.toFixed(1)}/10</span>
          </div>

          <div className="genres">
            {movie.genres?.map((genre) => (
              <span key={genre.id} className="genre-tag">
                {genre.name}
              </span>
            ))}
          </div>

          <div className="overview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>

          {trailer && (
            <div className="trailer-section">
              <h3>Trailer</h3>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="Movie Trailer"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="cast-section">
            <h3>Cast</h3>
            <div className="cast-grid">
              {movie.credits?.cast?.slice(0, 6).map((actor) => (
                <div key={actor.id} className="cast-member">
                  {actor.profile_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      alt={actor.name}
                    />
                  )}
                  <p className="actor-name">{actor.name}</p>
                  <p className="character-name">{actor.character}</p>
                </div>
              ))}
            </div>
          </div>

          <Link to="/" className="back-button">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
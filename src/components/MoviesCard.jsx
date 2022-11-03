import "../style-sheets/MoviesCard.css";

export function MoviesCard({ movie }) {
  const dbUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <li className="liStyle">
      <img className="movieImg" src={dbUrl} alt={movie.title} />
      <div className="cardInfo">
        <p>{movie.title}</p>
        <p>{movie.release_date}</p>
      </div>
      <button>Click to see backdrop</button>
    </li>
  );
}

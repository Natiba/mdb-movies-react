import movies from '../movies.json';
import { MoviesCard } from '../components/MoviesCard';
import '../style-sheets/MoviesGrid.css';

export function MoviesGrid () {
  return (
<ul className="movies-grid-container">
{movies.map((movie) => (

<MoviesCard key = {movie.id} movie = {movie} />

))
}
</ul>
  )
}
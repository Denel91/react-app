import useStoreMovie from "../store/useStoreMovie";
import { Link } from "react-router-dom";

export default function Favoriti() {
    const favoriti = useStoreMovie((state) => state.favoriti);

    if (favoriti.length === 0) {
        return (
            <div className="container mx-10">
              <h1>Non ci sono film preferiti al momento</h1>
              <Link to="/">Go Home</Link>
            </div>
          );
    }
   
  return (
    <div className="container mx-10">
      <h1>Lista dei tuoi film preferiti</h1>
      <ul>
        {favoriti.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="w-80 shadow-lg rounded-lg"/>
          </li>
        ))}
      </ul>
    </div>
  );
}
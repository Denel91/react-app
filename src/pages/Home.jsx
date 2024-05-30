import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useStoreMovie from '../store/useStoreMovie';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const addFavoriti = useStoreMovie((state) => state.addFavoriti);

    async function getMovies() {
        try {
          const {data} = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=dc4046a24cab2279ebaf3630eae45752&language=en-US&page=1');
          setMovies(data.results);
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(() => {
        getMovies();
      }, []);

    return (
        <div className="container mx-10">
            <h1 className='text-3xl font-bold p-2'>Movie List App</h1>
            <Link to={`/preferiti`}>Vai ai preferiti</Link>
            {movies.map((movie) => (
              <article key={movie.id}>
                <Link to={`/${movie.title}/${movie.id}`}>
                <h3>{movie.title}</h3>
                </Link>
                <button onClick={() => addFavoriti(movie)} type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Aggiungi ai preferiti</button>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='w-80 shadow-lg rounded-xl' />        
              </article>
            ))}
        </div>
    );
}
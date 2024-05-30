import { useLoaderData } from "react-router-dom";
import axios from "axios";

export async function getMovie(id) {
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dc4046a24cab2279ebaf3630eae45752`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function Component() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="container">
      <article>
        <div>
          <h1>{data.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt=""
            className="w-80 shadow-lg rounded-lg"
          />
          <p>{data.overview}</p>
        </div>

        <div>
          <p>{data.overview}</p>
          <p>Release Date : {data.release_date}</p>
          <p>Rating : {data.vote_average}</p>
        </div>
      </article>
    </div>
  );
}

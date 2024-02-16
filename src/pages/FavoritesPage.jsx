import React, { useEffect } from "react";
import { useMovies } from "../components/context/MovieContextProvider";
import MovieCard from "../components/movies/MovieCard";
import MovieCard2 from "../components/movies/MoviCard2";

const FavoritesPage = () => {
  const { getMovies, movies } = useMovies();
  useEffect(() => {
    getMovies();
  }, []);

  // Получение избранных фильмов из localStorage
  const favoriteMoviesIds = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div>
      {movies
        .filter((elem) => favoriteMoviesIds.includes(elem.id)) // Фильтрация по избранным ID
        .map((elem) => (
          <MovieCard2 key={elem.id} elem={elem} />
        ))}
    </div>
  );
};

export default FavoritesPage;

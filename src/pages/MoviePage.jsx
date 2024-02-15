import React from "react";
import SideBar from "../components/movies/SideBar";
import MovieList from "../components/movies/MovieList";

const MoviePage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <div style={{ width: "300px", flex: "none" }}>
        <SideBar />
      </div>
      <MovieList />
    </div>
  );
};

export default MoviePage;

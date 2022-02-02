import React from "react";
import { useSelector } from "react-redux";
import Card from "../ components/Card";
import Header from "../ components/Header";

const UserList = () => {
  const movies = useSelector(state => state.movies);
  console.log(movies);
  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coup de coeur <span>💖</span>
      </h2>
      <div className="result">
          {movies.length > 0 
              ? movies.map((movie) => <Card movie = {movie} key = {movie.id}/>)
              : <h2>Aucun coup de coeur pour le moment</h2>
          }
      </div>
    </div>
  );
}

export default UserList;
import "./App.css";
import React from 'react';
import GameList from "./components/GameList";
import { useContext } from "react";
import { GameContext } from "./context/GameContext";
import FormGameComponent from "./components/FormGameComponent";

function App() {
  const ContextGame = useContext(GameContext);
  const { handleChange, query, setGame } = ContextGame;

  return (
    <>
      <nav className="navbar navbar-dark bg-primary justify-content-between p-2">
        <a className="navbar-brand">VIDEO GAME - REACT</a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Buscar Juego por Titulo"
            aria-label="Search"
            name="searchTerm"
            id="searchTerm"
            value={query}
            onChange={handleChange}
          />
        </form>
      </nav>
      <div className="container">
        <h2 className="mt-3 mb-4">Lista de Video Juegos 
          <span> </span>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => setGame({})}
          >
            Add game
          </button>
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <GameList />
        </div>
      </div>
      <FormGameComponent />
    </>
  );
}

export default App;

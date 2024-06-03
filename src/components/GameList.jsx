import useGameList from "../hooks/useGameList";
import Game from "./Game";

export default function GameList() {
  const { filteredData, deleteGame, dataGame } = useGameList()

  return (
    <>
      {filteredData.map((game) => (
        <div className="col" key={game.id}>
          <div className="card h-100">
            <img src="./mario64.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{game.title}</h5>
              <p className="card-text">{game.description}</p>
              <p>
                <span className="badge bg-dark">{game.genre}</span>
              </p>
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target={`#modalGame`}
                onClick={() => dataGame(game)}
              >
                Ver detalles del juego
              </button>

              <button
                className="btn btn-danger m-2"
                onClick={() => deleteGame(game.id)}
              >
                Eliminar Game
              </button>
            </div>
          </div>
        </div>
      ))}
      <Game />
    </>
  );
}

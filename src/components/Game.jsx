import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function Game() {
  const ContextGame = useContext(GameContext);
  const { game } = ContextGame;

  return (
    <>
      <div className="modal" id="modalGame">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{game.title}</h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <p>DETALLE: {game.description}</p>
              <p>GENERO: {game.genre}</p>
              <p>FECHA DE PUBLICACION: 23-10-2004</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

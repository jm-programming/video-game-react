import { useContext } from "react";
import { GameContext } from "../context/GameContext";


export default function useGameList() {

    const ContextGame = useContext(GameContext);
    const { data, setData, filteredData, setGame } = ContextGame;

    const deleteGame = (id) => {
      setData(data.filter((game) => game.id !== id));
    };
  
    const dataGame = (game) => { 
      setGame(game)
    }


    return {
        deleteGame,
        dataGame,
        filteredData
    }
}
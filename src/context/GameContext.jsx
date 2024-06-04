import { createContext, useState } from 'react';
import { db } from '../data/db';


export const GameContext = createContext();

// eslint-disable-next-line react/prop-types
export function GameContextProvider({ children }) {

  const [data, setData] = useState(db)
  const [game, setGame] = useState({});
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <GameContext.Provider value={{ data, setData, game, setGame, filteredData, query, handleChange }}>
      {children}
    </GameContext.Provider>
  )

}
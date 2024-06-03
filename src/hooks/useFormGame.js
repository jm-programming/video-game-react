import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";

export default function useFormGame() {

    const ContextGame = useContext(GameContext);
    const { data, setData } = ContextGame;

    const [titleGame, setTitleGame] = useState("");
    const [descpGame, setDescpGame] = useState("");
    const [generoGame, setGeneroGame] = useState("Accion");

    function addGame() {
        if (titleGame !== '' || descpGame !== '') {
            const obj = {
                id: data.length + 1,
                title: titleGame,
                description: descpGame,
                genre: generoGame,
            };
            setData([...data, obj]);
            setTitleGame("");
            setDescpGame("");
        }

    }
    const onSubmit = (data) => {
        console.log('Formulario enviado:', data);
    };

    return {
        titleGame,
        descpGame,
        generoGame,
        setTitleGame,
        setDescpGame,
        setGeneroGame,
        addGame,
        onSubmit
    }
}

import { useForm } from 'react-hook-form';
import useFormGame from "../hooks/useFormGame";

const FormGameComponent = () => {
    const { titleGame,
        descpGame,
        setTitleGame,
        setDescpGame,
        setGeneroGame,
        addGame,onSubmit } = useFormGame()

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Formulario para el juego nuevo
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <h1>Formulario de Registro</h1>

                                <div>
                                    <label>Titulo:</label>
                                    <input
                                        {...register('title', { required: 'El titulo es obligatorio' })}
                                        className="form-control"
                                        type="text"
                                        placeholder="Ingresa el titulo del juego"
                                        value={titleGame}
                                        onChange={(event) => setTitleGame(event.target.value)}
                                    />
                                    {errors.title && <p>{errors.title.message}</p>}
                                </div>

                                <div>
                                    <label>Descripcion:</label>
                                    <input
                                        {...register('description', { required: 'La descripcion es obligatoria' })}
                                        className="form-control"
                                        type="text"
                                        placeholder="Ingresa la descripcion del juego"
                                        value={descpGame}
                                        onChange={(event) => setDescpGame(event.target.value)}
                                    />
                                    {errors.description && <p>{errors.description.message}</p>}
                                </div>
                                <div>
                                    <label> Selecciona un género de videojuegos:</label>
                                    <select
                                        id="genero"
                                        name="genero"
                                        className="form-control"
                                        onChange={(e) => setGeneroGame(e.target.value)}
                                    >
                                        <option value="Accion">Acción</option>
                                        <option value="Aventura">Aventura</option>
                                        <option value="Rol">Rol</option>
                                        <option value="Estrategia">Estrategia</option>
                                        <option value="Deportes">Deportes</option>
                                        <option value="Puzzle">Puzzle</option>
                                        <option value="Simulacion">Simulación</option>
                                        <option value="Indie">Indie</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() => addGame()}
                            >
                                Guardar Juego
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FormGameComponent;

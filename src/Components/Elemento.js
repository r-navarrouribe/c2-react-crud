import PropTypes from "prop-types";
import { useState } from "react";
export const Elemento = (props) => {
  const { elemento, listado, setListado } = props;
  const [editando, setEditando] = useState(false);
  const [artistaNuevo, setArtistaNuevo] = useState("");
  const [tituloNuevo, setTituloNuevo] = useState("");
  const toggleEditando = () => {
    setEditando(!editando);
  };
  const editarElemento = (e) => {
    e.preventDefault();
    elemento.artista = artistaNuevo;
    elemento.titulo = tituloNuevo;
    toggleEditando();
  };
  const borrarElemento = () => {
    setListado(
      listado.filter(
        (element) =>
          element.artista + element.titulo !==
          elemento.artista + elemento.titulo
      )
    );
  };
  return (
    <li className="elemento row border align-items-center mb-4">
      <span className="col">
        {elemento.artista} ➜ "{elemento.titulo}"
      </span>
      <button
        type="button"
        className="editar btn btn-dark"
        onClick={toggleEditando}
      >
        {editando ? "Cancelar" : "Editar"}
      </button>
      <div className="padre-form">
        <form
          className={`form-editar bg-dark border ${
            editando ? "d-flex" : "d-none"
          }`}
        >
          <div>
            <label htmlFor="artista" className="mr-1">
              Artista
            </label>
            <input
              type="text"
              id="artista"
              onChange={(event) => setArtistaNuevo(event.target.value)}
            />
          </div>
          <div className="editar-titulo">
            <label htmlFor="titulo" className="mr-1">
              Título
            </label>
            <input
              type="text"
              id="titulo"
              onChange={(event) => setTituloNuevo(event.target.value)}
            />
          </div>
          <div className="d-flex flex-row">
            <button
              type="submit"
              className="aplicar btn btn-warning"
              onClick={editarElemento}
            >
              Aplicar
            </button>
            <button
              type="button"
              className="aplicar btn btn-warning"
              onClick={toggleEditando}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
      <button
        type="button"
        className="eliminar btn btn-danger"
        onClick={() => borrarElemento()}
      >
        Borrar
      </button>
    </li>
  );
};

Elemento.propTypes = {
  elemento: PropTypes.object.isRequired,
  listado: PropTypes.array.isRequired,
  setListado: PropTypes.func.isRequired,
};

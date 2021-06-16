import PropTypes, { element } from "prop-types";
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
      <form
        className={`form-anyadir bg-dark border ${
          editando ? "d-block" : "d-none"
        }`}
      >
        <label htmlFor="artista">Artista</label>
        <input
          type="text"
          id="artista"
          className="mb-3"
          onChange={(event) => setArtistaNuevo(event.target.value)}
        />
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          id="titulo"
          className="mb-3"
          onChange={(event) => setTituloNuevo(event.target.value)}
        />
        <button
          type="submit"
          className="anyadir btn btn-warning ml-4"
          onClick={editarElemento}
        >
          Aplicar
        </button>
      </form>
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

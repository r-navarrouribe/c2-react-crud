import PropTypes from "prop-types";
import { useState } from "react";

export const Header = (props) => {
  const { listado, setListado } = props;
  const [anyadiendo, setAnyadiendo] = useState(false);
  const toggleAnyadiendo = () => {
    setAnyadiendo(!anyadiendo);
  };
  const [artistaNuevo, setArtistaNuevo] = useState("");
  const [tituloNuevo, setTituloNuevo] = useState("");
  const anyadirElemento = () => {
    setListado([...listado, { artista: artistaNuevo, titulo: tituloNuevo }]);
    toggleAnyadiendo();
  };
  return (
    <header className="cabecera row bg-dark align-items-center">
      <h1 className="col-7 ml-5">Caribe Mix 2000</h1>
      <div className="contenedor-anyadir col-3">
        <button
          type="button"
          className="boton-anyadir row btn btn-warning mr-5"
          onClick={toggleAnyadiendo}
        >
          Añadir elemento
        </button>
        <form
          className={`form-anyadir bg-dark border ${
            anyadiendo ? "d-block" : "d-none"
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
            type="button"
            className="anyadir btn btn-warning mr-4"
            onClick={anyadirElemento}
          >
            Añadir
          </button>
          <button
            type="button"
            className="anyadir btn btn-warning"
            onClick={toggleAnyadiendo}
          >
            Cancelar
          </button>
        </form>
      </div>
    </header>
  );
};

Header.propTypes = {
  listado: PropTypes.array.isRequired,
  setListado: PropTypes.func.isRequired,
};

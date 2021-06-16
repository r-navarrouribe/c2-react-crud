import PropTypes from "prop-types";
export const Elemento = (props) => {
  const { elemento, listado, setListado } = props;
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
      <button type="button" className="editar btn btn-dark">
        Editar
      </button>
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

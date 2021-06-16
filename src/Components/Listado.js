import PropTypes from "prop-types";
import { Elemento } from "./Elemento";

export const Listado = (props) => {
  const { listado, setListado } = props;
  return (
    <main className="contenido-general row bg-secondary">
      <ul className="col list-unstyled">
        {listado.map((elemento) => (
          <Elemento
            key={elemento.artista + elemento.titulo}
            elemento={elemento}
            listado={listado}
            setListado={setListado}
          />
        ))}
      </ul>
    </main>
  );
};

Listado.propTypes = {
  listado: PropTypes.array.isRequired,
  setListado: PropTypes.func.isRequired,
};

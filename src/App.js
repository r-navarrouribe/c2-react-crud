import { useState } from "react";
import { Header } from "./Components/Header";
import { Listado } from "./Components/Listado";

function App() {
  const [listado, setListado] = useState([
    { artista: "Los Morenos", titulo: "Follow the leader" },
    { artista: "Dos Morenos", titulo: "Levantando las manos" },
    { artista: "Sandy & Papo", titulo: "Buena pa' goza" },
    { artista: "Habana Club Band", titulo: "Ojalá que llueva café" },
  ]);
  return (
    <>
      <div className="contenedor general container">
        <Header listado={listado} setListado={setListado} />
        <Listado listado={listado} setListado={setListado} />
      </div>
    </>
  );
}

export default App;

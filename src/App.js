import { Cabecera } from "./componentes/Cabecera";
import { Noticia } from "./componentes/Noticia";
import { Pie } from "./componentes/Pie";
import { Sidebar } from "./componentes/Sidebar";


function App() {
  const titular = "Titular de la noticia";
  const cuerpoNoticia = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam, iusto omnis minima corrupti est officiis natus nam, adipisci commodi quo autem magnam sequi magni odio soluta temporibus velit quas!";
  const categorias = ["Noticias de deporte", "Noticias de ocio", "Noticias de política", "Noticias de espectáculos"];
  const otrasCosas = ["Nosequé", "Nosecuánto", "Talycual"];
  const estadoFooter = true;

  return (
    <div className="container">
      <Cabecera />
      <div className="contenedor-principal row">
        <Noticia titular={titular} cuerpoNoticia={cuerpoNoticia} />
        <Sidebar categorias={categorias} otrasCosas={otrasCosas} />
      </div>
      <Pie estadoFooter={estadoFooter} />
    </div>
  );
}

export default App;

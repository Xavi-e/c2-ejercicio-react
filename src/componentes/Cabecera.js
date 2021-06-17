import { MenuNavegacion } from "./MenuNavegacion";

export const Cabecera = () => {


    return (
        <header className="cabecera text-white row align-items-center">
            <h1 className="col m-0">Título</h1>
            <MenuNavegacion />
        </header>
    )
};
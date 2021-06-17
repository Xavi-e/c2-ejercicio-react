import { Categorias } from "./Categorias";
import { OtrasCosas } from "./OtrasCosas";

export const Sidebar = (props) => {

    const { categorias, otrasCosas } = props;

    return (
        <aside className="sidebar col-12 col-sm-5 col-md-4 py-4">
            <Categorias categorias={categorias} />
            <OtrasCosas otrasCosas={otrasCosas} />
        </aside>
    )
}
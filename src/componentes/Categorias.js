export const Categorias = (props) => {

    const { categorias } = props;

    return (
        <section className="listado">
            <h3>Categorías</h3>
            <ul className="list-unstyled">
                <li>{categorias[0]}</li>
                <li>{categorias[1]}</li>
                <li>{categorias[2]}</li>
                <li>{categorias[3]}</li>
            </ul>
        </section>
    )
}
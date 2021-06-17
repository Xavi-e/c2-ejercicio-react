export const OtrasCosas = (props) => {

    const { otrasCosas } = props;

    return (
        <section className="listado">
            <h3>Otras cosas</h3>
            <ul className="list-unstyled">
                <li>{otrasCosas[0]}</li>
                <li>{otrasCosas[1]}</li>
                <li>{otrasCosas[2]}</li>
            </ul>
        </section>
    )
}
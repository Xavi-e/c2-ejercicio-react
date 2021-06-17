export const Pie = (props) => {

    const { estadoFooter } = props;

    const copyrigth = () => {
        if (estadoFooter === true) { return ('Texto del Footer - Ningun derecho reservado, copia lo que quieras'); }
        else { return ('Texto del Footer'); }
    }
    return (
        <footer className="pie text-white row align-items-center">
            <p className="col text-center">{copyrigth}</p>
        </footer>
    )
}
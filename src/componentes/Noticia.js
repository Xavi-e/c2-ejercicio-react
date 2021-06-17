export const Noticia = (props) => {

    const { titular, cuerpoNoticia } = props;
    return (
        <main className="principal col-12 col-sm-7 col-md-8 py-4">
            <h2>{titular}</h2>
            <p>
                {cuerpoNoticia}
            </p>
            <p>
                {cuerpoNoticia}
            </p>
        </main>
    )
}
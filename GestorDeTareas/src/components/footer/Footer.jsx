import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="left">
                <span>
                    <h1 className='titleRedes'>Redes</h1>
                </span>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Linked In</li>
                    <li>GitHub</li>
                </ul>

            </div>
            <div className="center">
                <span className='desc'>
                    <h1 className='titleDesc'>Sobre Nosotros</h1>
                </span>
                <p className='textDesc'>
                    Bienvenido a Tus Tareas, donde la innovación y la simplicidad para lograr los una lista de cosas que hacer.
                    En ella se apunta, punto por punto, todas aquellas tareas (ya sean de nuestro trabajo o de nuestra vida privada) de las que tenemos que hacernos cargo.
                    Esta lista puede organizarse para un solo día, para una semana, o bien en forma de proyecto.
                    Nuestra misión es facilitar tu día a día a través de herramientas web que marquen la diferencia.
                </p>

            </div>
            <div className="right">
                <span>
                    <h1 className='titleCont'>Contacto</h1>
                </span>
                <p className="conText">Ante cualquier duda, No dudes en <a href="/contacto">Conctactarnos</a></p>

            </div>

        </div>
    );
}

export default Footer;

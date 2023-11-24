import "./inicio.css";
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
        <div className='conteinerI'>
            <section>
                <h1 className="titleI">Bienvenido</h1>
                <span className="spanI">
                    ¡Gracias por unirte a nuestra plataforma de Lista de Tareas! Nuestra herramienta está diseñada para hacer tu vida más fácil
                    al ayudarte a organizar y realizar un seguimiento de tus tareas diarias.
                </span>
            </section>
            <section>

                <h2>¿Para qué sirve?</h2>
                <span className="spanI">La Lista de Tareas es tu compañero perfecto para gestionar todas tus actividades cotidianas. Puedes utilizarla para:</span>

                <ol className="oli">
                    <li className="lii">Organizar tus Tareas: Crea listas específicas para el trabajo, estudios, hogar o cualquier otro proyecto que estés manejando.</li>
                    <li className="lii">Priorizar Actividades: Asigna niveles de importancia o urgencia a tus tareas para saber qué hacer primero.</li>
                    <li className="lii">Seguimiento de Progreso: Marca las tareas completadas y observa tu progreso a medida que avanzas a lo largo del día, la semana o el mes.</li>
                    <li className="lii">Recordatorios Personalizables: Configura recordatorios para tareas importantes y recibe notificaciones para que nunca se te pase nada por alto.</li>
                </ol>
            </section>
            <section>
                <h2 className="titleII">¿Cómo Funciona?</h2>

                <ul className="olu">
                    <li className="lii">Creación de Tareas: Para comenzar, simplemente haz clic en el botón "Agregar Tarea" e ingresa los detalles de la tarea.</li>
                    <li className="lii">Organización: Puedes organizar tus tareas en diferentes categorías o listas para una mejor estructura.</li>
                    <li className="lii">Seguimiento: Marca las tareas como completadas una vez que las hayas realizado.</li>
                    <li className="lii">Recordatorios: Establece recordatorios para recibir alertas sobre tareas específicas en el momento que elijas.</li>
                </ul>
            </section>
            <span className="spanI">
                La Lista de Tareas es intuitiva y fácil de usar, lo que te permite concentrarte en lo que importa sin perder tiempo en la gestión del trabajo.
                ¡Empieza hoy a organizar tu vida de una manera más eficiente!
                Gracias por elegir nuestra Lista de Tareas. ¡Esperamos que te resulte útil y eficaz en tu jornada diaria!
            </span>

            <Link to="/creartarea"> <button>Crea tu tarea</button></Link>
        </div>
    );
}

export default Inicio;

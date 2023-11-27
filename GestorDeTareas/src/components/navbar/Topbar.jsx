import "./navbar.css"
import { Link } from 'react-router-dom';

export default function TopBar() {
    return (
        <div className="navbar">
           
                <div className="logo">
                    <img src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr" alt="Logo" />
                </div>
                <h1 className="title">Tus Tareas</h1>
                <div className="links">
                    <ul className="list">
                        <li className="item"><Link to="/">Inicio</Link></li>                        
                        <li className="item"><Link to="/listadetareas">Lista de tareas</Link></li>                        
                    </ul>
                </div>
           

        </div>
    )
}

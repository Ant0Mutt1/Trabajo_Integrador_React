import "../taskitem/taskitem.css";
import { useState } from 'react';

const Taskitem = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        titulo: "",
        descripcion: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log(formData);

        setFormData({
            nombre: "",
            apellido: "",
            titulo: "",
            descripcion: "",
        });

    };

    return (
        <div className="conteinerT">
            <h1 className="titleTask">Crea tu Tarea</h1>
            <span className="descTask">A continuacion, llena el formulario para crear tu Tarea</span>
            <section>
                <form className="formT" onSubmit={handleSubmit}>
                    <label className="labelT">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ingresa tu NOMBRE..."
                        className="inputT"
                    />

                    <label className="labelT">Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        placeholder="Ingresa tu APELLIDO..."
                        className="inputT"
                    />

                    <label className="labelT">Titulo de la Tarea</label>
                    <input
                        type="text"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        placeholder="Ingresa titulo de la tarea.."
                        className="inputT"
                    />

                    <textarea
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        cols="30"
                        rows="10"
                        className="textAreaT"
                    ></textarea>

                    <button type="submit" className="btnT">
                        Crear
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Taskitem;
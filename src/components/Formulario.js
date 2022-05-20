import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';

const Formulario = ( { crearCita } ) => {

    //* Crear State de citas
    const [ cita, actualizarCita ] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })
    const [ error, actualizarError ] = useState(false);

    //* Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita, //* Copia el state actual
            [e.target.name] : e.target.value //* Actualiza el state
        })
    }

    //* Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //* Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();
        
        // Validar
        if(mascota.trim() === '' || 
           propietario.trim() === '' || 
           fecha.trim() === '' || 
           hora.trim() === '' || 
           sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        actualizarError(false);

        // Asinar un ID
        cita.id = uuidv4();

        // Crear la cita
        crearCita(cita);

        // Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    //' Estilos CSS
    const textarea = {
        resize : 'none',
        height : '100px'
    }

    return ( 
        <Fragment>
            <h2>Crear Citas</h2>

            { error ? 
                <p 
                    className="alerta-error"
                >Todos los campos son obligatorios</p>: null }

            <form
                onSubmit={ submitCita }
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota" 
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input 
                    type="text" 
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input 
                    type="date" 
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState} 
                    value={fecha}                   
                />

                <label>Hora</label>
                <input 
                    type="time" 
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea 
                    style = {textarea}
                    className="u-full-width"
                    name="sintomas"
                    placeholder="Describe los síntomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                
                <button 
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>

            </form>
        </Fragment>
    );
}
 
//* PropTypes
Formulario.propTypes = {
    crearCita: propTypes.func.isRequired
}

export default Formulario;
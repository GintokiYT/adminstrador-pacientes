import React from 'react';
import PropType from 'prop-types';

const Cita = ( {cita, eliminarCita} ) => {
    //* Destructuracion de props cita
    const { id, mascota, propietario, fecha, hora, sintomas } = cita;

    return ( 
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Síntomas: <span>{sintomas}</span></p>
            <button
                className="button eliminar u-full-width"
                onClick={ () => eliminarCita(id) }
            >Eliminar &times;</button>
        </div>
     );
}

//* PropTypes
Cita.propTypes = {
    cita: PropType.object.isRequired,
    eliminarCita: PropType.func.isRequired
}
 
export default Cita;
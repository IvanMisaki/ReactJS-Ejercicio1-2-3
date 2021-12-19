import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto_Class } from '../models/contacto.class';


const Componenteb = ({props}) => {

    const [estado, ActualizarSesion] = useState(props.conectado);

    return (
        <div>
            <h4>Nombre : { props.nombre }</h4>
            <h4>Apellido : { props.apellido }</h4>
            <h4>Email : { props.email }</h4>
            <h4>{estado?"Contacto En Línea":"Contacto No Disponible"}</h4>
            <button onClick={() => ActualizarSesion(!estado)}>Actualizar Estado</button>
        </div>
    );
};


Componenteb.propTypes = {
    props: PropTypes.instanceOf(Contacto_Class)
};


export default Componenteb;

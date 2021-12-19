import React from 'react';
import { Contacto_Class } from '../models/contacto.class';
import Componenteb from './ComponenteB';

const Componentea = () => {

    const defaultContacto = new Contacto_Class('Ivan', 'Misaki', 'ivan16sc@gmail.com', false)



    return (
        <div>
            <Componenteb props={defaultContacto}></Componenteb>
        </div>
    );
}

export default Componentea;

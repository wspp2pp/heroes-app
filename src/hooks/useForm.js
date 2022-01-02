import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    // Gestiona el reset

    const reset = () => {
        setValues( initialState );
    }
    
    // Gestiona el agregado/quita de caracteres

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}
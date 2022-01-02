import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const queryString = require( 'query-string' );

    // Extrae el valor de busqueda que asigne a ?q=

    const { q = '' } = queryString.parse( location.search );

    // Almacena cada caracter enviado en el textbox

    const [ formValues, handleInputChange ] = useForm({
        // Asigna el valor de la ?q= al buscador
        searchText: q, 
    });

    const { searchText } = formValues;

    // Solo llama a getHeroesByName( q ) solo cuando q cambia

    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q] );
    
    // Gestiona la busqueda

    const handleSearch = (e) => {
        e.preventDefault();
        // Navega hacia el path actual agregado al final ?=${ searchText }
        navigate(`?q=${ searchText }`);
    }

    return (
        <>
            <h1 className="mt-4">Search Screen</h1>
            <hr></hr>

            <div className="row">
                <div className="col-5">

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            // Texto de sugerencia
                            placeholder="Type your search"
                            className="form-constrol"
                            name="searchText"
                            // Evita usar el autocompletado del navegador
                            autoComplete="off"
                            // Usa el texto almacenado
                            value={ searchText }
                            // Cada vez que agrego/quito un caracter
                            onChange={ handleInputChange }
                        />
                        <br></br>
                        <br></br>
                        <button
                            className="btn btn-primary btn-lg btn-block"
                            type="submit"
                        >
                            Search
                        </button>
                        
                        </form>
                        
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr></hr>

                    {

                        ( q === '' )
                            ? <div className="alert alert-info animate__animated animate__fadeIn"> Type your search </div>
                            : ( heroesFiltered.length === 0 )
                                && <div className="alert alert-danger animate__animated animate__fadeIn"> No results for: { q } </div>

                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                // Envio el resto de propiedades
                                { ...hero }
                            />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
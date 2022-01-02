import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList = ( {publisher} ) => {

    // Vuelve a ejecutar getHeroesByPublisher unicamente si cambia su dependencia: publisher

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ] );

    return (
        // Filas de row-cols-X en pantalla pequeñna y row-cols-md-X en pantallas medianas
        <div className="row row-cols-1 row-cols-md-2 animate__animated animate__fadeIn">
                {
                    heroes.map( hero => (
                            <HeroCard 
                            key={ hero.id } // Siempre asigno la key para que react lo pueda gestionar
                            {...hero} // Paso todas las propiedades de hero a <HeroCard/>
                            />
                    ))
                }
        </div>
    )
}
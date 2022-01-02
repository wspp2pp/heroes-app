import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";


export const HeroScreen = () => {

    const { heroId } = useParams();

    // Vuelve a ejecutar getHeroById unicamente si cambia su dependencia: heroId

    const hero = useMemo(() => getHeroById( heroId ), [ heroId ] );

    const navigate = useNavigate();

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () => {
        // Vuelve a la pagina anterior
        return navigate( -1 );
    }

    // Si el heroe no esta en la base de datos, vuelvo a la pantalla principal

    if ( !hero ) {
        return <Navigate to='/' />
    }
    // El public esta implicito
    const imagePath = `/assets/${id}.jpg`;

    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img 
                    src={imagePath} 
                    alt={superhero}
                    // Agrega borde redondeado
                    className="img-thumbnail"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group">
                    <li className="list-group-item"> <b>Alter ego:</b> {alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"> <b>First_Appearance:</b> {first_appearance}</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn} 
                >
                    Return
                </button>
            </div>
        </div>
    )
}
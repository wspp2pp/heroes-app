import { Link } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const imagePath = `./Assets/${id}.jpg`;
    return (
        // Coloco las tarjetas dentro de columnas
        <div className="col"> 
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroImages(`./${ id }.jpg`) } className="card-img" alt={superhero}/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {
                                // Si el titulo es diferente que las participaciones, entonces se muestra
                                (alter_ego !== characters) &&
                                <p className="text-muted">{characters}</p>
                            }   
                            {
                                // Enviar a /hero/${id} cuando hacen clic
                                <Link to={`/hero/${id}`}>
                                    Info
                                </Link>
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
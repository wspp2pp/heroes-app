import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">             
                <Link 
                className="navbar-brand" 
                to="/"
                >
                Comics
                </Link>
            </div>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        // Si la clase esta activa, entonces asocia el estilo
                        className= { ({ isActive }) => 'nav-link link' + ( isActive ? 'active' : '' ) }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className= { ({ isActive }) => "nav-link link" + ( isActive ? 'active' : '' ) }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className= { ({ isActive }) => "nav-link link" + ( isActive ? 'active' : '' ) }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        Franco
                    </span>

                    <button 
                        // Se quita porque estamos en router v6 activeClassName="active"
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button> 
                    {/* Se quita navlink para hacer uso de las propiedades de button */}
                </ul>
            </div>
        </nav>
    )
}
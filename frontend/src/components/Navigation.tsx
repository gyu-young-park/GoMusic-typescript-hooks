import React from 'react'
import { NavLink } from 'react-router-dom'

interface NavbarProps {
    showModalWindow : Function;
} 

const Navigation = (props : NavbarProps) => {
    const onShowModalWindow = () => {
        props.showModalWindow();
    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
                <div className="container">
                    <button type="button" className="navbar-brand order-1 btn btn-success" onClick={() => { onShowModalWindow() }}>
                        Sign In
                    </button>
                    <div className="navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link" to="/">
                                Home
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/promos">
                                Promotions
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/about">
                                About
                            </NavLink>
                        </div>

                    </div>
                </div> 
            </nav>
        </div>
    )
}

export default Navigation
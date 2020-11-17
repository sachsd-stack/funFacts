import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo"><div className="center title">Texas Hold'em Facts</div></a>
                <ol className="center">
                    <div className="nav1"><NavLink to="/funfactone">Fun Fact One</NavLink></div>
                    <div className="nav2"><NavLink to="/funfacttwo">Fun Fact Two</NavLink></div>
                    <div className="nav3"><NavLink to="/funfactthree">Fun Fact Three</NavLink></div>
                </ol>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
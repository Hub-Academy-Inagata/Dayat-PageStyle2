import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else
            setNavbar(false);
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className={navbar ? "navbar active navbar-expand-lg" : "navbar navbar-expand-lg"} >
                <div className="container">
                    <img className="navbar-logo" src={require('../img/nav-logo.svg').default} alt="" />
                    <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav navbar-item my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" activeclassname='active'>Beranda</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tentang-kita" activeclassname='active'>Tentang</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/galeri" activeclassname='active'>Galeri</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/artikel" activeclassname='active'>Artikel</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/kontak" activeclassname='active'>Kontak</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex justify-content-center">
                            <button className="btn btn-secondary rounded-pill" type="submit">PPDB</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
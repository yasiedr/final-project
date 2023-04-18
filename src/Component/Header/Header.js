import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'
import CloseIcon from '@mui/icons-material/Close';
export default function Header() {
    const [show, setShow] = useState(false)
    return (
        <header>

            <Navbar bg="light" variant="light">
                <Container>
                    {/* start mobile */}
                    <div className="mobile__menu" onClick={() => setShow(true)}>
                        <MenuIcon />
                    </div>
                    {/* end mobile */}
                    <Link to="/" className='header__berand'>Hungry Baby! </Link>
                    <Nav className="me-auto">
                        <Link to="/profile" className="bold">BABY FAVOURITES</Link>
                        <Link to="/add" className="bold">ADD A RECIPE</Link>
                        <Link to="/login">SIGN IN</Link>
                        <Link to="/signup">SIGN UP</Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* menu mobile */}
            <div className={`menu__mobile ${show ? "menu__mobile-show" : "menu__mobile-unshow"}`}>
                <div className="close_menu" onClick={() => setShow(false)}>
                    <CloseIcon />
                </div>
                <div className="menu__mobile-des">
                    <div className="menu__mobile-des-head">
                        <Link to="/" className='header__berand'> Hungry<span> Baby! </span></Link>
                    </div>
                    <div className="menu__mobile-des-body ">
                        <Link to="/profile">BABY FAVOURITES</Link>
                        <Link to="/add">ADD A RECIPE</Link>
                        <Link to="/login">SIGN IN</Link>
                        <Link to="/signup">SIGN UP</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

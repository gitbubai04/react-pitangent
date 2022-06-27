import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {

    const location = useLocation();
    const routes = [{
        pathname: '/', name: 'Home'

    },
    {
        pathname: '/blog', name: 'Blog'

    },
    {
        pathname: '/contact', name: 'Contact'

    },
    {
        pathname: '/cunnect', name: 'Cunnect'

    },
    {
        pathname: '/discover', name: 'Discover'

    },
    {
        pathname: '/editPick', name: 'Edit Pick'

    }
    ,
    {
        pathname: '/reviews', name: 'Review'

    }
    ]
    const [showSignin, setShowSignin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const handleSigninModal = () => setShowSignin(!showSignin);
    const handleSignupModal = () => setShowSignUp(!showSignUp);
    return (
        <>
            <header class="header bg-white">
                <div class="col-logo">
                    <img src="image/logo2.jpeg" alt="" />
                    <Link to="/" target="_blank" class="logo">PiTANGENT</Link>
                </div>

                <nav class="navBar">
                    <ul class="navbar-list">{
                        routes.map((e, i) => (
                            <li key={i}><Link to={e.pathname} className={location.pathname === e.pathname ? "active" : "navbar-link"}>{e.name}</Link></li>
                        ))
                    }
                        <li>
                            <div class="menu">
                                <div class="d-flex">
                                    <button class="btn btn-style" onClick={handleSignupModal}>
                                        Sign Up
                                    </button>
                                    <button class="btn  btn-style btn-style-border" onClick={handleSigninModal}>
                                        Log in
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>

                <div class="mobile-navbar-btn">
                    <ion-icon name="menu-outline" class="mobile-nav-icon"></ion-icon>
                    <ion-icon name="close-outline" class="mobile-nav-icon"></ion-icon>
                </div>
                <div class="mobile-navbar-btn">
                    <i name="menu" class="fas fa-bars mobile-nav-icon"></i>
                    <i name="close" class="fas fa-window-close mobile-nav-icon"></i>
                </div>
            </header>
            <AuthModal show={showSignin} title="Sign In" handleModal={handleSigninModal}>
                <Signin />
            </AuthModal>
            <AuthModal show={showSignUp} title="Sign Up" handleModal={handleSignupModal}>
                <Signup />
            </AuthModal>

        </>
    )
}

export default Navbar

const AuthModal = (props) => {
    const { title, show, handleModal, children } = { ...props };
    return (
        <Modal
            show={show}
            onHide={handleModal}
            {...props}
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}
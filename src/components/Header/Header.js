import React from 'react';
import {Link} from "react-router-dom";
import styles from "./styles.module.css"

function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                            <img
                                src="https://pbs.twimg.com/media/EhoIqm_XYAAo4SC.jpg"
                                height="70"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </Link>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className={styles.icons}>
                            <i className="fa-solid fa-bell"></i>
                        </div>
                        <div className={styles.icons}>
                            <i className="fa-solid fa-envelope"></i>
                        </div>


                        <div className="dropdown">
                            <Link to="#">
                                <img
                                    src="https://via.placeholder.com/200"
                                    className="rounded-circle"
                                    height="50"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Header;




import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <div className={styles.menu}>
            <Container>
                    <img
                    className={styles.img}
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png" alt="photo" />
                <Nav className="me-auto">
                    <div className={styles.firstLink}>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </div>
                    <div className={styles.secondLink}>
                        <Nav.Link as={Link} to="/units">Characters</Nav.Link>
                    </div>
                </Nav>
            </Container>
        </div>
    );
}

import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import styles from "./Home.module.css";


export default function Home() {
    
    return (
        <div className={styles.page}>
            <Menu/>
            <div className={styles.firstText}>Find all your favorite character</div>
            <div className={styles.secondText}>You can find out all the information about your favorite characters</div>
            <Link to="/units">
                <Button className={styles.btn} variant="warning" size="lg"><div className={styles.thirdText}>See more...</div></Button>
            </Link>
            <img className={styles.img} src={'https://imgpng.ru/d/starwars_PNG27.png'} alt="img" />
        </div>
    );
}


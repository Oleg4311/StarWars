import React from 'react'
import Modal from 'react-bootstrap/Modal';
import styles from "./ModalWindow.module.css";

export default function ModalWindow(props) {
    
    
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
          >
            <Modal.Header className={styles.modalHeader} closeButton/>
            <Modal.Body className={styles.modalBody}>
                <img className={styles.img} src={`https://starwars-visualguide.com/assets/img/characters/${props.modalShow.imgId}.jpg`} alt="img" />
                <div className={props.modalShow.gender === 'male' ? styles.genderM : styles.genderN}>{props.modalShow.gender}</div>
                <div className={props.modalShow.gender === 'female' ? styles.genderF : styles.genderN}>{props.modalShow.gender}</div>
                <div className={props.modalShow.gender === 'hermaphrodite' ? styles.genderH : styles.genderN}>{props.modalShow.gender}</div>
                <div className={props.modalShow.gender === 'n/a' ? styles.genderN : styles.genderN}>{props.modalShow.gender}</div>
                <div className={props.modalShow.birthYear !== 'unknown' ? styles.birthYear : styles.genderN}>{props.modalShow.birthYear}</div>
                <div className={styles.name}>{props.modalShow.name}</div>
                <div className={styles.block}>
                <div className={styles.textHairColor}>Hair color:</div>
                <div className={styles.hairColor}>{props.modalShow.hairColor}</div>
                <div className={styles.textSkinColor}>Skin color:</div>
                <div className={styles.skinColor}>{props.modalShow.skinColor}</div>
                </div>
                <div className={styles.blockHeight}>
                <div className={styles.textHeight}>Height</div>
                <div className={styles.height}>{props.modalShow.height}</div>
                </div>
                <div className={styles.blockMass}>
                <div className={styles.textMass}>Mass</div>
                <div className={styles.mass}>{props.modalShow.mass}</div>
                </div>
            </Modal.Body>
          </Modal>
        );
      }
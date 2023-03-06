import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import styles from "./ModalWindow.module.css";

export default function ModalWindow(props) {
    console.log("🚀 ~ file: Cards.jsx:10 ~ ModalWindow ~ props:", props)
    
    
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body className={styles.modalBody}>
                <img className={styles.img} src={`https://starwars-visualguide.com/assets/img/characters/${props.modalShow.imgId}.jpg`} alt="img" />
                <div className={styles.gender}>{props.modalShow.gender}</div>
                <div className={styles.birthYear}>{props.modalShow.birthYear}</div>
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
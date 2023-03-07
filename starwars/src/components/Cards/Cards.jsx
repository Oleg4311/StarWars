import React, { useState } from "react";
import styles from "./Cards.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import DataList from "../DataList/DataList";
import Pagination from "@mui/material/Pagination";

const isObjectEmpty = (objectName) => {
  return Object.keys(objectName).length === 0;
};

function getUrlId(url) {
  const splitedUrl = url.split("/");
  const characterId = splitedUrl[splitedUrl.length - 2];

  return characterId;
}

export default function Cards({ onPageChange, activePage, unitsData, units }) {
  const [modalShow, setModalShow] = useState({});
  const [filter, setFilter] = useState("");

  const pageCount = unitsData.count ? Math.ceil(unitsData.count / 10) : 9;

  const myUnits = units.filter((el) =>
  filter.length ? el.eye_color === filter : true
  );

  return (
    <>
      <ModalWindow
        modalShow={modalShow}
        show={!isObjectEmpty(modalShow)}
        onHide={() => setModalShow({})}
      />
      <div className={styles.group}>
        <div className={styles.block}>
          <Pagination
            className={styles.pagination}
            onChange={(e, pageInfo) => onPageChange(e, pageInfo)}
            count={pageCount}
            variant="outlined"
            shape="rounded"
            page={activePage}
          />
          <DataList 
          filter={filter} setFilter={setFilter} 
          />
        </div>
        <div className={styles.searchFilter}>
          {unitsData.count} Peoples for you to choose your favorite
        </div>
        <div className={styles.cardsList}>
          {myUnits?.map((unit, idx) => (
            <div
              className={styles.unitCard}
              id={idx}
              key={idx}
              onClick={() =>
                setModalShow({
                  name: unit.name,
                  url: unit.thisUrl,
                  hairColor: unit.hair_color,
                  skinColor: unit.skin_color,
                  gender: unit.gender,
                  birthYear: unit.birth_year,
                  height: unit.height,
                  mass: unit.mass,
                  imgId: getUrlId(unit.url),
                })
              }
            >
              <div className={styles.name}>{unit.name}</div>
              <div className={styles.height}>{unit.height}</div>
              <div className={unit.mass === 'unknown' ? styles.unMass : styles.mass}>{unit.mass}</div>
              <div className={styles.textHeight}>Height</div>
              <div className={styles.textMass}>Mass</div>
              <div className={unit.gender === 'male' ? styles.genderM : styles.genderN}>{unit.gender}</div>
              <div className={unit.gender === 'female' ? styles.genderF : styles.genderN}>{unit.gender}</div>
              <div className={unit.gender === 'hermaphrodite' ? styles.genderH : styles.genderN}>{unit.gender}</div>
              <div className={unit.gender === 'n/a' ? styles.genderN : styles.genderN}>{unit.gender}</div>
              <div className={unit.birth_year !== 'unknown' ? styles.birth_year : styles.genderN}>{unit.birth_year}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

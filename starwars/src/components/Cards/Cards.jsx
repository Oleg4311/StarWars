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
              key={crypto.randomUUID()}
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
              <div className={styles.gender}>{unit.gender}</div>
              <div className={styles.birth_year}>{unit.birth_year}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

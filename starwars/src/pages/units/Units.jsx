import { Backdrop, Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import Menu from "../../components/Menu/Menu";
import { initUnitsAC } from "../../store/units/actionsCreators";
import { INIT_UNITS } from "../../store/units/actionsTypes";
import Error from "../error/Error";

export default function Units() {
  const dispatch = useDispatch();
  const unitsData = useSelector((store) => store.units);
  const loader = useSelector((store) => store.loader);
  const units = unitsData?.results || [];

  const [activePage, setActivePage] = useState(1);

  const onPageChange = (e, pageInfo) => {
    setActivePage(pageInfo);
    dispatch({ type: INIT_UNITS, payload: [] });
  };

  useEffect(() => {
    dispatch(initUnitsAC(activePage));
  }, [activePage]);

  return (
    <>
      {!loader && !!units.length && (
        <>
          <Menu />
          <Cards
          onPageChange={onPageChange}
          activePage={activePage}
          unitsData={unitsData}
          units={units}
          />
        </>
      )}

      {!loader && !units.length && <Error />}
      <Backdrop open={loader}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </Backdrop>
    </>
  );
}
